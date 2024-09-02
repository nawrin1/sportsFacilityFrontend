import { jwtDecode } from 'jwt-decode';
interface JwtPayload {
  role?: string;
  // Add other properties as needed
}

export const verifyToken = (token: string) => {
  return jwtDecode<JwtPayload>(token);
};