import React, { useState } from "react";
import { auth } from "../firebase";

export const AuthContext = React.createContext({
  user: null,
  setUser: () => {},
});

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth')) || auth.currentUser);
  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
