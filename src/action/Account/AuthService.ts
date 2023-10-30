// AuthService.ts
import data from '../../data/login.json';

interface UserData {
  username: string;
  password: string;
}

export function login(username: string, password: string): boolean {
  const user = data.find(
    (userData: UserData) => userData.username === username && userData.password === password,
  );
  return !!user;
}
