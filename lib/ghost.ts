import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.API_URL2 || "",
  key: process.env.API_KEY2 || "",
  version: "v3",
});

export default api;
