import React from 'react'
import axios from 'axios';

const api = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com',

});

export const fetchAllUsers = async() => {
  const res = await api.get('/users');
  return res.data;
};

export const fetchUserById = async(id) => {
  const res = await api.get(`/user/${id}`);
  return res.data;
};

export const createUser = async(userData) => {
  const res = await api.post('/user', userData);;
  return res.data;
};
export const updateUser = async({id, ...userData }) => {
  const res = await api.put(`/user/${id}`, userData);
  return res.data;
};
export const deleteUser = async(id) => {
  const res = await api.delete(`/user/${id}`);
  return res.data;
};

export const fetchPostByUser = async(userid) => {
  const res = await api.get(`/posts?userId=${userid}`);
  return res.data;
};

