import * as request from "./requester.js";
import * as authService from './authService.js';

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) =>
  request.post(`${baseUrl}/login`, { email, password })
    .then(user => {
      console.log(user);
      if (user.code && user.code >= 400) {
        throw new Error(user.message);
      }
      authService.saveUser(user);
      return user;
    })
    .catch(error => {
      console.error('Login error:', error.message);
      throw error;
    });

export const register = (email, password) =>
  request.post(`${baseUrl}/register`, { email, password })
    .then(user => {
      if (user.code && user.code >= 400) {
        throw new Error(user.message);
      }
      authService.saveUser(user);
      return user;
    })
    .catch(error => {
      console.error('Registration error:', error.message);
      throw error;
    });

export const logout = () =>
  fetch(`${baseUrl}/logout`, {
    headers: { 'X-Authorization': authService.getToken() }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => { throw err; });
      }
      authService.deleteUser();
    })
    .catch(error => {
      console.error('Logout error:', error.message);
      throw error;
    });
