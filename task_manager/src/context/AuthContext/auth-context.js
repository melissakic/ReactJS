import React, { useState } from "react";
import { useSecurityContext } from "../../hooks/auth";

export const AuthContext = React.createContext({
  user: false,
  setUser: () => {},
});

export default function AuthContextProvider(props) {
  const check = useSecurityContext();
  const [user, setUser] = useState(check);
  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
