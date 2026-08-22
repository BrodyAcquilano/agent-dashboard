import api from "./axios.js";

export const projectApi = {
  /* ─────────────────────────────
     GET ALL
  ───────────────────────────── */
  getAll: async () => {
    try {
      const res =
        await api.get(
          "/api/projects/get",
        );

      return {
        data: res.data?.data || [],
        message:
          res.data?.message || "",
      };
    } catch (err) {
      const message =
        err.response?.data?.error ||
        "Failed to get projects.";

      return {
        data: [],
        message,
      };
    }
  },

  /* ─────────────────────────────
     GET ONE
  ───────────────────────────── */
  get: async (_id) => {
    if (!_id) {
      return {
        data: null,
        message: "Missing _id.",
      };
    }

    try {
      const res =
        await api.get(
          `/api/projects/get/${_id}`,
        );

      return {
        data: res.data?.data || null,
        message:
          res.data?.message || "",
      };
    } catch (err) {
      const message =
        err.response?.data?.error ||
        "Failed to get project.";

      return {
        data: null,
        message,
      };
    }
  },

  /* ─────────────────────────────
     ADD
  ───────────────────────────── */
  add: async (project) => {
    if (!project) {
      return {
        data: null,
        message:
          "Missing project data.",
      };
    }

    try {
      const res =
        await api.post(
          "/api/projects/add",
          {
            project,
          },
        );

      return {
        data: res.data?.data || null,
        message:
          res.data?.message || "",
      };
    } catch (err) {
      const message =
        err.response?.data?.error ||
        "Failed to add project.";

      return {
        data: null,
        message,
      };
    }
  },

  /* ─────────────────────────────
     UPDATE
  ───────────────────────────── */
  update: async (project) => {
    const _id = project?._id;

    if (!_id || !project) {
      return {
        data: null,
        message:
          "Missing project data or _id.",
      };
    }

    try {
      const res =
        await api.put(
          `/api/projects/update/${_id}`,
          {
            project,
          },
        );

      return {
        data: res.data?.data || null,
        message:
          res.data?.message || "",
      };
    } catch (err) {
      const message =
        err.response?.data?.error ||
        "Failed to update project.";

      return {
        data: null,
        message,
      };
    }
  },

  /* ─────────────────────────────
     REMOVE
  ───────────────────────────── */
  remove: async (_id) => {
    if (!_id) {
      return {
        data: null,
        message: "Missing _id.",
      };
    }

    try {
      const res =
        await api.delete(
          `/api/projects/remove/${_id}`,
        );

      return {
        data: res.data?.data || null,
        message:
          res.data?.message || "",
      };
    } catch (err) {
      const message =
        err.response?.data?.error ||
        "Failed to remove project.";

      return {
        data: null,
        message,
      };
    }
  },
};