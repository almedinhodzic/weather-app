import axios from "axios";

export const weather = axios.create({
  baseURL: process.env.BASE_URL,
});

export const api_key = process.env.API_KEY;
