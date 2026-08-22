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

    const projects =
      await db
        .collection("projects")
        .find(
          {},
          {
            projection: {
              _id: 1,
              projectName: 1,
              projectDescription: 1,
            },
          },
        )
        .toArray();

    return res.json({
      data: projects,
      message: "Projects retrieved.",
    });
  } catch (err) {
    console.error(
      "Failed to get projects.",
    );

    return res.status(500).json({
      error: "Failed to get projects.",
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

    const project =
      await db
        .collection("projects")
        .findOne({
          _id: new ObjectId(_id),
        });

    if (!project) {
      return res.status(404).json({
        error: "Project not found.",
      });
    }

    return res.json({
      data: project,
      message: "Project retrieved.",
    });
  } catch (err) {
    console.error(
      "Failed to get project.",
    );

    return res.status(500).json({
      error: "Failed to get project.",
    });
  }
});

/* ─────────────────────────────
   ADD
───────────────────────────── */
router.post("/add", async (req, res) => {
  const { project } = req.body;

  if (!project) {
    return res.status(400).json({
      error: "Missing project data.",
    });
  }

  try {
    const db = getDB();

    const now = new Date();

    const document = {
      ...project,
      createdAt: now,
      updatedAt: now,
    };

    const result =
      await db
        .collection("projects")
        .insertOne(document);

    return res.status(201).json({
      data: {
        ...document,
        _id: result.insertedId,
      },
      message: "Project added.",
    });
  } catch (err) {
    console.error(
      "Failed to add project.",
    );

    return res.status(500).json({
      error: "Failed to add project.",
    });
  }
});

/* ─────────────────────────────
   UPDATE
───────────────────────────── */
router.put("/update/:_id", async (req, res) => {
  const { _id } = req.params;
  const { project } = req.body;

  if (!ObjectId.isValid(_id)) {
    return res.status(400).json({
      error: "Invalid _id.",
    });
  }

  if (!project) {
    return res.status(400).json({
      error: "Missing project data.",
    });
  }

  try {
    const db = getDB();

    const document = {
      ...project,
      updatedAt: new Date(),
    };

    delete document._id;

    const result =
      await db
        .collection("projects")
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
        error: "Project not found.",
      });
    }

    return res.json({
      data: result,
      message: "Project updated.",
    });
  } catch (err) {
    console.error(
      "Failed to update project.",
    );

    return res.status(500).json({
      error: "Failed to update project.",
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
        .collection("projects")
        .deleteOne({
          _id: new ObjectId(_id),
        });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        error: "Project not found.",
      });
    }

    return res.json({
      data: {
        _id,
      },
      message: "Project removed.",
    });
  } catch (err) {
    console.error(
      "Failed to remove project.",
    );

    return res.status(500).json({
      error: "Failed to remove project.",
    });
  }
});

export default router;