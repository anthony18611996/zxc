import axios from "axios";
import { SITE_URL } from "../api/api";
import { API_URL } from "../api/api";
//import { GET_TODOS_URL } from "../api/methods/api";

const instance = axios.create({
  baseURL: `${SITE_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default {
  getEvents() {
    console.log(`${SITE_URL}`);
    return instance.get(`${API_URL}`);
  },
  getEvent(id) {
    return instance.get(`${API_URL}` + id);
  },
};
