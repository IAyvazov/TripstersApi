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

export const editTrip = async (data: TripCreate, tripId: string | undefined) => {

  const url = `https://localhost:7131/Trip/Edit/${tripId}`;

  return await fetch(url, {
    method: 'PUT',
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

export const getAllTripsByUser = async (userId: string) => {

  const url = `https://localhost:7131/Trip/ByUser/${userId}`;

  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  })
    .then(response => response.json())
}

export const getTripById = async (tripId: string | undefined) => {

  const url = `https://localhost:7131/Trip/Get/${tripId}`;

  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  })
    .then(response => response.json())
}

export const getTripDetails = async (tripId: string | undefined, userId: string) => {

  const url = `https://localhost:7131/Trip/Details/${tripId}/${userId}`;

  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  })
    .then(response => response.json())
}

export const joinTrip = async (tripId: number | undefined, userId: string) => {

  const url = `https://localhost:7131/Trip/Join/${tripId}/${userId}`;

  return await fetch(url, {
    method:"PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  })
    .then(response => response.json())
}
export const deleteTrip = async (tripId: number | undefined, userId: string) => {

  const url = `https://localhost:7131/Trip/Delete/${tripId}/${userId}`;

  return await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  })
    .then(response => response.json())
}
