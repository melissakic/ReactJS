import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Present from "./Pages/LandingPage/Present";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import Chart from "./Pages/Chart/Chart";
import AllTasks from "./Pages/AllTasks/AllTasks";
import MyTasks from "./Pages/MyTasks/MyTasks";

const router = createBrowserRouter([
  { path: "/", element: <Present /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/profile", element: <Profile /> },
  { path: "/chart", element: <Chart /> },
  { path: "/alltasks", element: <AllTasks /> },
  { path: "/mytasks", element: <MyTasks /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
