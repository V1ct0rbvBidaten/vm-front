import axios from "axios";

export const signup = async (userData) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/signup`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/login`, userData);
};

export const resetPassword = async (email) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/request-password-reset`,
    email
  );
};

export const verifyCode = async (verificationData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/verify-code`,
    verificationData
  );
};

export const getCurrentUser = async (token) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/auth`, token);
};

export const completeUser = async (userData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/complete-user`,
    userData
  );
};

export const completeProfile = async (profileData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/complete-profile`,
    profileData
  );
};
