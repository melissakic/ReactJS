import React, { useState } from "react";

export const AuthContext = React.createContext({
  isLoggged: false,
  setIsLogged: () => {},
});

export default function AuthContextProvider(props) {
  const [logged, setLogged] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggged: logged, setIsLogged: setLogged }}>
      {props.children}
    </AuthContext.Provider>
  );
}
