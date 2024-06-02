const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://iface-api.onrender.com"
    : "http://localhost:3000";

export { baseURL };
