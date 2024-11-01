import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const registerUser = async (data) => {
    return axios.post(`${API_URL}/auth/register`, data);
};

export const loginUser = async (data) => {
    return axios.post(`${API_URL}/auth/login`, data);
};

export const fetchPosts = async (token) => {
    return axios.get(`${API_URL}/posts`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const createPost = async (data, token) => {
    return axios.post(`${API_URL}/posts`, data, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
export const fetchAuthorPosts = async (token) => {
    return await axios.get(`${API_URL}/author`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const deletePost = async (postId, token) => {
    return await axios.delete(`${API_URL}/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
