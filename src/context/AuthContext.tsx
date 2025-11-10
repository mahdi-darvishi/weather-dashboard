import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../hooks/useAuth";

const AUTH_KEY = "auth_token";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(AUTH_KEY);
      if (storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      console.error("Failed to read auth token from localStorage", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  const login = (name: string) => {
    setUser(name);
    localStorage.setItem(AUTH_KEY, name);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
