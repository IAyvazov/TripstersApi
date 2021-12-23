import { TripCreate } from "../interfaces/trip";
import { getToken } from "./identityService";

export const createTrip = async (data: TripCreate) => {

  const url = 'https://localhost:7131/Trip/Create';

  const token = getToken();
  
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