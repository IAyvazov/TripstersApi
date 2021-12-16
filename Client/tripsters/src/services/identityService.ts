import { RegisterData, RegisterValues } from "../interfaces/identity";

 const register = async (data: RegisterData) => {

  const url = 'https://localhost:7131/Identity/Register';

  return await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};


export const onRegisterSybmit = async (values: RegisterValues, actions: any) => {

  const { confirmPassword, ...data } = values;
  var response = await register(data);
  alert(response.description)

  if (response.succeeded) {
    actions.resetForm();
  }
}