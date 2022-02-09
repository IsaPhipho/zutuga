import { createContext, useState } from "react";
import * as auth from "../components/services/auth";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as  AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function login() {
    const response = await auth.login();
    setUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: {}, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;