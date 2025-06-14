import { createContext, useEffect, useState } from "react";

import { api } from "../lib/axios";
import { AxiosError } from "axios";

const AuthContext = createContext({});

interface AuthContextType {
  signIn: ({ email, password }: SignInProps) => Promise<void>;
  signOut: () => void;
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
  admin?: User;
  token?: string;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem("@casamentoBiaEIago:admin_token");
    const userStr = localStorage.getItem("@casamentoBiaEIago:admin_user");

    if (token && userStr) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const user = JSON.parse(userStr);
      return { user, token };
    }

    return {};
  });

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/admin/signin", { email, password });
      const { admin, token } = response.data;

      localStorage.setItem("@casamentoBiaEIago:admin_token", token);
      localStorage.setItem(
        "@casamentoBiaEIago:admin_user",
        JSON.stringify(admin)
      );

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ admin, token });
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
    localStorage.removeItem("@casamentoBiaEIago:admin_token");
    localStorage.removeItem("@casamentoBiaEIago:admin_user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@casamentoBiaEIago:admin_token");
    const userStr = localStorage.getItem("@casamentoBiaEIago:admin_user");

    if (token && userStr) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const admin = JSON.parse(userStr);
        setData({ token, admin });
      } catch (error) {
        localStorage.removeItem("@casamentoBiaEIago:admin_token");
        localStorage.removeItem("@casamentoBiaEIago:admin_user");
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
        user: data.admin,
        token: data.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
export type { AuthContextType };
