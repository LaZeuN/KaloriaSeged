import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/user';

export const listUsers = () => axios.get(REST_API_BASE_URL);
export const createUser = (user) => axios.post(REST_API_BASE_URL, user);
export const getUser = (userId) => axios.get(REST_API_BASE_URL + "/" + userId);
export const updateUser = (userId, user) => axios.put(REST_API_BASE_URL + "/" + userId, user);