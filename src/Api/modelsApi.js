import api from "./axios.js";

export const modelsApi = {
  getAll: async () => {
    try {
      const res =
        await api.get(
          "/api/models/get",
        );

      return {
        data: res.data?.data || [],
        message:
          res.data?.message || "",
      };
    } catch (err) {
      return {
        data: [],
        message:
          err.response?.data?.error ||
          "Failed to get models.",
      };
    }
  },

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
          `/api/models/get/${_id}`,
        );

      return {
        data: res.data?.data || null,
        message:
          res.data?.message || "",
      };
    } catch (err) {
      return {
        data: null,
        message:
          err.response?.data?.error ||
          "Failed to get model.",
      };
    }
  },

  add: async (model) => {
    if (!model) {
      return {
        data: null,
        message: "Missing model data.",
      };
    }

    try {
      const res =
        await api.post(
          "/api/models/add",
          {
            model,
          },
        );

      return {
        data: res.data?.data || null,
        message:
          res.data?.message || "",
      };
    } catch (err) {
      return {
        data: null,
        message:
          err.response?.data?.error ||
          "Failed to add model.",
      };
    }
  },

  update: async (model) => {
    const _id = model?._id;

    if (!_id || !model) {
      return {
        data: null,
        message:
          "Missing model data or _id.",
      };
    }

    try {
      const res =
        await api.put(
          `/api/models/update/${_id}`,
          {
            model,
          },
        );

      return {
        data: res.data?.data || null,
        message:
          res.data?.message || "",
      };
    } catch (err) {
      return {
        data: null,
        message:
          err.response?.data?.error ||
          "Failed to update model.",
      };
    }
  },

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
          `/api/models/remove/${_id}`,
        );

      return {
        data: res.data?.data || null,
        message:
          res.data?.message || "",
      };
    } catch (err) {
      return {
        data: null,
        message:
          err.response?.data?.error ||
          "Failed to remove model.",
      };
    }
  },
};