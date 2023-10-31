// UserContext.tsx
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

type User = string | null;
type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);

  const value: UserContextType = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
