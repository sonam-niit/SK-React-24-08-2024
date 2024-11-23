import axios from 'axios';

// const API_URL = 'http://localhost:3000/api';
const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (data) => {
    return axios.post(`${API_URL}/api/auth/register`, data);
};

export const loginUser = async (data) => {
    return axios.post(`${API_URL}/api/auth/login`, data);
};

export const fetchPosts = async (token) => {
    return axios.get(`${API_URL}/api/posts`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const createPost = async (data, token) => {
    return axios.post(`${API_URL}/api/posts`, data, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
export const fetchAuthorPosts = async (token) => {
    return await axios.get(`${API_URL}/api/author`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const deletePost = async (postId, token) => {
    return await axios.delete(`${API_URL}/api/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
