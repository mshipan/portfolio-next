export interface IUser {
  id: string;
  name: string;
  role: "owner";
  email: string;
  createdAt: string;
}

export interface ILoginPayload {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface ILoginSuccess<T> {
  success: true;
  message: string;
  data: T;
}

export interface ILoginError {
  success: false;
  message: string;
}
