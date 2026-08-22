import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "../../Server/db.js";

const __filename =
  fileURLToPath(import.meta.url);

const __dirname =
  path.dirname(__filename);

const DATA_PATH =
  path.resolve(
    __dirname,
    "../../Data",
  );

async function populateDatabase() {
  const db = await connectDB();

  const folders = await fs.readdir(
    DATA_PATH,
    {
      withFileTypes: true,
    },
  );

  for (const folder of folders) {
    if (!folder.isDirectory()) {
      continue;
    }

    const collectionName =
      folder.name.toLowerCase();

    const folderPath =
      path.join(
        DATA_PATH,
        folder.name,
      );

    const collectionExists =
      await db
        .listCollections(
          { name: collectionName },
          { nameOnly: true },
        )
        .hasNext();

    if (!collectionExists) {
      await db.createCollection(
        collectionName,
      );

      console.log(
        `${collectionName}: collection created`,
      );
    }

    const files = await fs.readdir(
      folderPath,
    );

    const jsonFiles =
      files.filter((file) =>
        file.endsWith(".json"),
      );

    if (jsonFiles.length === 0) {
      console.log(
        `${collectionName}: no JSON files`,
      );

      continue;
    }

    const collection =
      db.collection(collectionName);

    for (const file of jsonFiles) {
      const filePath =
        path.join(
          folderPath,
          file,
        );

      const fileData =
        await fs.readFile(
          filePath,
          "utf8",
        );

      const document =
        JSON.parse(fileData);

      await collection.insertOne(
        document,
      );

      console.log(
        `${collectionName}: inserted ${file}`,
      );
    }
  }

  console.log(
    "Database population complete",
  );

  process.exit(0);
}

populateDatabase().catch((err) => {
  console.error(
    "Database population failed:",
    err,
  );

  process.exit(1);
});