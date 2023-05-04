import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Present from "./Pages/LandingPage/Present";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import Chart from "./Pages/Chart/Chart";
import AllTasks from "./Pages/AllTasks/AllTasks";
import MyTasks from "./Pages/MyTasks/MyTasks";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  let router = createBrowserRouter([
    { path: "/", element: <Present /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/profile", element: ctx.isLoggged ? <Profile /> : <Login /> },
    { path: "/chart", element: ctx.isLoggged ? <Chart /> : <Login /> },
    {
      path: "/alltasks",
      element: ctx.isLoggged ? <AllTasks /> : <Login />,
    },
    { path: "/mytasks", element: ctx.isLoggged ? <MyTasks /> : <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
