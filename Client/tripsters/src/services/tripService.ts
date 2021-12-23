import { TripCreate } from "../interfaces/trip";
import { getToken } from "./identityService";

const token = getToken();

export const createTrip = async (data: TripCreate) => {

  const url = 'https://localhost:7131/Trip/Create';

  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
}

export const getAllTrips = async () => {

  const url = 'https://localhost:7131/Trip/All';

  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  })
  .then(response => response.json())
}