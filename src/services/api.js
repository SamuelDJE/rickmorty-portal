import axios from "axios";

// Instância única do Axios: toda requisição do app parte daqui.
const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 10000,
});

export default api;
