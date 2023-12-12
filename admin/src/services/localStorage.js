export const setTokenLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

export const removeTokenLocalStorage = () => localStorage.removeItem("token");
