import axios from "axios";

export const signup = async (userData) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/signup`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/login`, userData);
};

export const verifyCode = async (verificationData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/verify-code`,
    verificationData
  );
};

export const completeProfile = async (profileData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/complete-profile`,
    profileData
  );
};

export const getCurrentUser = async (token) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/auth`, token);
};
