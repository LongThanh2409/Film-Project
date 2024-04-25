import axios from "axios";
import { env } from "./env";

console.log(env.apiKey);

const instance = axios.create({
  baseURL: env.apiURL,
  params: {
    api_key: env.apiKey,
  },
  timeout: 30000,
});

export default instance;
