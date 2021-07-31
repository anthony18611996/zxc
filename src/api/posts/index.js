import api from "../../instance/api";
import { GET_POSTS_URL, GET_POSTS_BY_ID } from "./urls";

export function getPosts() {
  return api.get(GET_POSTS_URL);
}

export function getPostById(id) {
  return api.get(`${GET_POSTS_BY_ID}/${id}`);
}
