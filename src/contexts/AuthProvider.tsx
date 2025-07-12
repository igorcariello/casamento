import { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { AxiosError } from "axios";
import { AuthContext } from "./AuthContext";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthData {
  admin: User | null;
  token: string | null;
}

interface SignInProps {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem("@casamentoBiaEIago:admin_token");
    const userStr = localStorage.getItem("@casamentoBiaEIago:admin_user");

    if (token && userStr) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const admin = JSON.parse(userStr);
      return { admin, token };
    }

    return { admin: null, token: null };
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
    } catch (error) {
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
    setData({ admin: null, token: null });
  }

  useEffect(() => {
    const token = localStorage.getItem("@casamentoBiaEIago:admin_token");
    const userStr = localStorage.getItem("@casamentoBiaEIago:admin_user");

    if (token && userStr) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const admin = JSON.parse(userStr);
        setData({ admin, token });
      } catch (error) {
        localStorage.removeItem("@casamentoBiaEIago:admin_token");
        localStorage.removeItem("@casamentoBiaEIago:admin_user");
        setData({ admin: null, token: null });
        console.log("Erro ao analisar dados do usuário no localStorage", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.admin,
        token: data.token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
