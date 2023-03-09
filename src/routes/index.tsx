import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
]);
