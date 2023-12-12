/* eslint-disable no-useless-catch */
import axios from "axios";
import { setTokenLocalStorage } from "./localStorage";

const url = "http://127.0.0.1:8000/api";

export async function getAllAnswers() {
  try {
    const response = await axios.get(`${url + "/users/answers"}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getAllQuestions() {
  try {
    const response = await axios.get(`${url + "/questions/get"}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post(`${url + "/admin/login"}`, {
      email: email,
      password: password,
    });

    setTokenLocalStorage(response.data.token);

    return response;
  } catch (error) {
    throw error;
  }
}
