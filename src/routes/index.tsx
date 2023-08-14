import React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import FullScreenLoader from "../components/FullScreenLoader";
import { PATHS } from "../constants/paths";
import App from "../app";

const HomePageLazy = lazy(
  () => import(/* webpackChunkName: "home" */ "../pages/Home/index"),
);
const CharPageLazy = lazy(
  () => import(/* webpackChunkName: "char" */ "../pages/Char/index"),
);

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: (
      <Suspense fallback={<FullScreenLoader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <HomePageLazy />
          </Suspense>
        ),
      },
      {
        path: "/char/:id",
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <CharPageLazy />
          </Suspense>
        ),
      },
      {
        path: PATHS.NOT_FOUND,
        element: <Suspense fallback={<FullScreenLoader />}>404</Suspense>,
      },
    ],
  },
]);
