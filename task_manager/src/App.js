import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Present from "./pages/LandingPage/Present";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Chart from "./pages/Chart/Chart";
import AllTasks from "./pages/AllTasks/AllTasks";
import MyTasks from "./pages/MyTasks/MyTasks";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext/auth-context";
import Bar from "./Components/UI/NavigationBar/NavigationBar";

function App() {
  const ctx = useContext(AuthContext);

  let router = createBrowserRouter([
    { path: "/", element: <Present /> },
    {
      path: "/",
      element: <Bar />,
      children: [
        { path: "/profile", element: ctx.user ? <Profile /> : <Login /> },
        { path: "/chart", element: ctx.user ? <Chart /> : <Login /> },
        {
          path: "/alltasks",
          element: ctx.user ? <AllTasks /> : <Login />,
        },
        { path: "/mytasks", element: ctx.user ? <MyTasks /> : <Login /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
