import { createContext, useEffect, useState } from "react";

import { api } from "../lib/axios";
import { AxiosError } from "axios";

const AuthContext = createContext({});

interface AuthContextType {
  signIn: ({ email, password }: SignInProps) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface SignInProps {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthData {
  user?: User;
  token?: string;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem("@casamentoBiaEIago:token");
    const userStr = localStorage.getItem("@casamentoBiaEIago:user");

    if (token && userStr) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const user = JSON.parse(userStr);
      return { user, token };
    }

    return {};
  });

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@casamentoBiaEIago:token", token);
      localStorage.setItem("@casamentoBiaEIago:user", JSON.stringify(user));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error: unknown) {
      const err = error as AxiosError<{ message: string }>;
      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@casamentoBiaEIago:token");
    localStorage.removeItem("@casamentoBiaEIago:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@casamentoBiaEIago:token");
    const userStr = localStorage.getItem("@casamentoBiaEIago:user");

    if (token && userStr) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const user = JSON.parse(userStr);
        setData({ token, user });
      } catch (error) {
        localStorage.removeItem("@casamentoBiaEIago:token");
        localStorage.removeItem("@casamentoBiaEIago:user");
        setData({});
        console.log("Errr ao analisar dados do usuário no localStorage", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
export type { AuthContextType };
