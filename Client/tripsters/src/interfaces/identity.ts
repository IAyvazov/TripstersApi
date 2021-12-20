export interface RegisterValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string
};

export interface RegisterData {
  userName: string;
  email: string;
  password: string;
};

export interface LoginData {
  userName: string;
  password: string;
};

export interface User {
  id: string;
  name: string;
  setName: (name: string) => void;
  setId: (id: string) => void;
}

export interface SetUser {
  setName: (name: string) => void;
  setId: (id: string) => void;
}