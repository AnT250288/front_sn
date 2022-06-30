import axios from "axios";


const API = axios.create({baseURL: "http://localhost:8080"})

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);

export const likePost = (id, userId) => API.put(`posts/${id}/like`, {userId: userId})