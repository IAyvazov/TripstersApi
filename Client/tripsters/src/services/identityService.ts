import { RegisterData } from "../interfaces/identity";

export const register = async (data: RegisterData) => {

    const url = 'https://localhost:7131/Identity/Register';

    return await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
};