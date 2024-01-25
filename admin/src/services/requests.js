/* eslint-disable no-useless-catch */
import axios from "axios";
import { removeTokenLocalStorage, setTokenLocalStorage } from "./localStorage";

const serverUrl = "http://127.0.0.1:8000/api";
const userUrl = "http://localhost:5173/user/answers/";

function redirectMaintenance(error){
  if(error.response.status === 503){
    window.location.href = '/503';
  };
};

/**
 * Retrieves all answers from the server.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function getAllAnswers() {
  try {
    const response = await axios.get(`${serverUrl + "/users/answers"}`);
    return response;
  } catch (error) {
    redirectMaintenance(error);
    throw error;
  }
}

/**
 * Retrieves all questions from the server.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function getAllQuestions() {
  try {
    const response = await axios.get(`${serverUrl + "/questions/get"}`);
    return response;
  } catch (error) {
    redirectMaintenance(error);
    throw error;
  }
}

/**
 * Retrieves answers for a specific user from the server.
 * @param {string} userId - The ID of the user for whom answers are requested.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function getOneUserAnswers(userId) {
  try {
    const response = await axios.get(
      `${serverUrl + "/user/answers/" + userId}`
    );
    return response;
  } catch (error) {
    redirectMaintenance(error);
    throw error;
  }
}

/**
 * Initiates the login process by sending admin credentials to the server.
 * @param {string} email - The admin's email address.
 * @param {string} password - The admin's password.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
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
    redirectMaintenance(error);
    throw error;
  }
}

/**
 * Adds user answers to the server.
 * @param {Array} userAnswers - An array of user answers to be added.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function addUserDb(userAnswers) {
  try {
    const response = await axios.post(`${serverUrl + "/user/add"}`, {
      answers: userAnswers,
      url: userUrl,
    });
    return response;
  } catch (error) {
    redirectMaintenance(error);
    throw error;
  }
}
