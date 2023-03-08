import { User } from "../../types/User";
import { api } from "./api";

type GetUserDataRequestProps = {
  userId: string;
  accessToken: string;
};

type GetUserDataResponseProps = {
  user: User;
};

type LoginRequestProps = {
  email: string;
  password: string;
};

type LoginResponseProps = {
  user: any;
  accessToken: string;
};

type RegisterRequestProps = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponseProps = {
  message: string;
};

async function getUserData({
  userId,
  accessToken,
}: GetUserDataRequestProps): Promise<GetUserDataResponseProps | null> {
  const url = `/user/${userId}`;
  const { data: response } = await api.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response?.data;
}

async function login({
  email,
  password,
}: LoginRequestProps): Promise<LoginResponseProps | null> {
  try {
    const url = `/auth/signin`;
    const body = { email, password };
    const { data: response } = await api.post(url, body);
    return response?.data;
  } catch (error) {
    return null;
  }
}

async function register({
  name,
  email,
  password,
}: RegisterRequestProps): Promise<RegisterResponseProps | null> {
  try {
    const url = `/auth/signup`;
    const body = { name, email, password };
    const { data: response } = await api.post(url, body);
    return response?.data;
  } catch (error) {
    return null;
  }
}

export const userService = {
  getUserData,
  login,
  register,
};
