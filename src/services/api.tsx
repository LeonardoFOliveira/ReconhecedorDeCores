import axios from "axios";

const api = axios.create({
  baseURL: "https://reconhecedordecores-backend.azurewebsites.net",
});

export default api;