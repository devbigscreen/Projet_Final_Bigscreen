/* eslint-disable no-useless-catch */
import axios from "axios";
import { removeTokenLocalStorage, setTokenLocalStorage } from "./localStorage";

const serverUrl = "http://127.0.0.1:8000/api";
const userUrl = "http://localhost:5173/answers/";

export async function getAllAnswers() {
  try {
    const response = await axios.get(`${serverUrl + "/users/answers"}`, {
      timeout: 5000,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getAllQuestions() {
  try {
    const response = await axios.get(`${serverUrl + "/questions/get"}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getOneUserAnswers(userId) {
  try {
    const response = await axios.get(
      `${serverUrl + "/user/answers/" + userId}`
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post(`${serverUrl + "/admin/login"}`, {
      email: email,
      password: password,
    });

    setTokenLocalStorage(response.data.token);

    return response;
  } catch (error) {
    removeTokenLocalStorage();
    throw error;
  }
}

export async function addUserDb(userAnswers) {
  try {
    const response = await axios.post(`${serverUrl + "/user/add"}`, {
      answers: userAnswers,
      url: userUrl,
    });
    return response;
  } catch (error) {
    throw error;
  }
}
