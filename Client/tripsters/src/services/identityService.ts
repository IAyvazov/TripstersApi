import { LoginData, RegisterData } from "../interfaces/identity";

export const register = async (data: RegisterData) => {

  const url = 'https://localhost:7131/Identity/Register';

  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
};

export const login = async (data: LoginData) => {

  const url = 'https://localhost:7131/Identity/Login';

  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
};

export const logout = async () => {

  const url = 'https://localhost:7131/Identity/Logout';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
};

export const getUser = async () => {

  const url = 'https://localhost:7131/Identity/User';

  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
};

export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
}

export const getToken = () => {
 return localStorage.getItem('token');
}