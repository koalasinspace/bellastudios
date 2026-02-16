'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth, User, IdTokenResult } from 'firebase/auth';
import { app } from './config';

const auth = getAuth(app);

export interface AuthContextType {
  user: User | null;
  role: string | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null, role: null });

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const token = await user.getIdTokenResult();
        setRole(token.claims.role as string || null);
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
