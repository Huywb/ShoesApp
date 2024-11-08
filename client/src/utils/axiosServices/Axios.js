import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://localhost:9000/api',
  withCredentials:true,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchGet = async (url, params) => {
  try {
    const response = await axiosInstance.get(url, { params })
    return response.data
  } catch (error) {
    console.error(`GET request failed for ${url}:`, error);
    throw error;
  }
  };
  
export const fetchPost = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data)
    return response.data
  } catch (error) {
    console.error(`POST request failed for ${url}:`, error);
    throw error;
  }
  };
  
export const fetchPut = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data)
    return response.data
  } catch (error) {
    console.error(`PUT request failed for ${url}:`, error);
    throw error;
  }
  };
  
export const fetchDelete = async (url) => {
  try {
    const response = await axiosInstance.delete(url)
    return response.data
  } catch (error) {
    console.error(`DELETE request failed for ${url}:`, error);
    throw error;
  }
  };