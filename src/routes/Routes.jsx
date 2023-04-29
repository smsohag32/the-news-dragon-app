import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/news/News/News";
import Category from "../pages/Home/Category";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/LoginPage/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-smsohag32.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-smsohag32.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
