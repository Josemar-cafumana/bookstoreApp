import About from "@pages/About";
import BookSearch from "@pages/BookSearch";
import Home from "@pages/Home";
import Layout from "@pages/Layout";
import App from "App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "search",
        element: <BookSearch />,
      },
    ],
  },
]);
