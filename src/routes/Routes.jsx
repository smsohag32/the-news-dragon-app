import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/news/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "category/:id",
        element,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: "/:id",
        element: <News />,
      },
    ],
  },
]);

export default router;
