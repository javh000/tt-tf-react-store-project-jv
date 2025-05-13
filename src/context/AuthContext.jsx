import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const stored = JSON.parse(localStorage.getItem("auth")) || null;
  const [auth, setAuth] = useState(stored);

  const login = ({ user, role, token }) => {
    const authData = { user, role, token };
    localStorage.setItem("auth", JSON.stringify(authData));
    setAuth(authData);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth?.user,
        role: auth?.role,
        token: auth?.token,
        isAuthenticated: !!auth?.token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
