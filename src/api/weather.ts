import axios from "axios";

export const weather = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const api_key = process.env.REACT_APP_API_KEY;
