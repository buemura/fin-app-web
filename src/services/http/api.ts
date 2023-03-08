import axios from "axios";

const baseURL = process.env.BACKEND_API;

export const api = axios.create({ baseURL });
