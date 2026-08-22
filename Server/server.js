import express from "express";

import { connectDB } from "./db.js";

import projectRoutes from "./Routes/projects.js";
import modelRoutes from "./Routes/models.js";

const app = express();

const PORT =
  process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Agent Dashboard backend is running.",
  );
});

app.use(
  "/api/projects",
  projectRoutes,
);

app.use(
  "/api/models",
  modelRoutes,
);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server listening on port ${PORT}`,
      );
    });
  })
  .catch((err) => {
    console.error(
      "DB connect failed:",
      err,
    );

    process.exit(1);
  });