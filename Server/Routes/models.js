import express from "express";
import { ObjectId } from "mongodb";

import { getDB } from "../db.js";

const router = express.Router();

/* ─────────────────────────────
   GET ALL
───────────────────────────── */
router.get("/get", async (req, res) => {
  try {
    const db = getDB();

    const models =
      await db
        .collection("models")
        .find({})
        .toArray();

    return res.json({
      data: models,
      message: "Models retrieved.",
    });
  } catch (err) {
    console.error("Failed to get models.");

    return res.status(500).json({
      error: "Failed to get models.",
    });
  }
});

/* ─────────────────────────────
   GET ONE
───────────────────────────── */
router.get("/get/:_id", async (req, res) => {
  const { _id } = req.params;

  if (!ObjectId.isValid(_id)) {
    return res.status(400).json({
      error: "Invalid _id.",
    });
  }

  try {
    const db = getDB();

    const model =
      await db
        .collection("models")
        .findOne({
          _id: new ObjectId(_id),
        });

    if (!model) {
      return res.status(404).json({
        error: "Model not found.",
      });
    }

    return res.json({
      data: model,
      message: "Model retrieved.",
    });
  } catch (err) {
    console.error("Failed to get model.");

    return res.status(500).json({
      error: "Failed to get model.",
    });
  }
});

/* ─────────────────────────────
   ADD
───────────────────────────── */
router.post("/add", async (req, res) => {
  const { model } = req.body;

  if (!model) {
    return res.status(400).json({
      error: "Missing model data.",
    });
  }

  try {
    const db = getDB();

    const now = new Date();

    const document = {
      ...model,
      createdAt: now,
      updatedAt: now,
    };

    delete document._id;

    const result =
      await db
        .collection("models")
        .insertOne(document);

    return res.status(201).json({
      data: {
        ...document,
        _id: result.insertedId,
      },
      message: "Model added.",
    });
  } catch (err) {
    console.error("Failed to add model.");

    return res.status(500).json({
      error: "Failed to add model.",
    });
  }
});

/* ─────────────────────────────
   UPDATE
───────────────────────────── */
router.put("/update/:_id", async (req, res) => {
  const { _id } = req.params;
  const { model } = req.body;

  if (!ObjectId.isValid(_id)) {
    return res.status(400).json({
      error: "Invalid _id.",
    });
  }

  if (!model) {
    return res.status(400).json({
      error: "Missing model data.",
    });
  }

  try {
    const db = getDB();

    const document = {
      ...model,
      updatedAt: new Date(),
    };

    delete document._id;

    const result =
      await db
        .collection("models")
        .findOneAndUpdate(
          {
            _id: new ObjectId(_id),
          },
          {
            $set: document,
          },
          {
            returnDocument: "after",
          },
        );

    if (!result) {
      return res.status(404).json({
        error: "Model not found.",
      });
    }

    return res.json({
      data: result,
      message: "Model updated.",
    });
  } catch (err) {
    console.error("Failed to update model.");

    return res.status(500).json({
      error: "Failed to update model.",
    });
  }
});

/* ─────────────────────────────
   REMOVE
───────────────────────────── */
router.delete("/remove/:_id", async (req, res) => {
  const { _id } = req.params;

  if (!ObjectId.isValid(_id)) {
    return res.status(400).json({
      error: "Invalid _id.",
    });
  }

  try {
    const db = getDB();

    const result =
      await db
        .collection("models")
        .deleteOne({
          _id: new ObjectId(_id),
        });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        error: "Model not found.",
      });
    }

    return res.json({
      data: {
        _id,
      },
      message: "Model removed.",
    });
  } catch (err) {
    console.error("Failed to remove model.");

    return res.status(500).json({
      error: "Failed to remove model.",
    });
  }
});

export default router;