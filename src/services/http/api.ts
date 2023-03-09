import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_API;

export const api = axios.create({ baseURL });
