import React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import FullScreenLoader from "../components/FullScreenLoader";

const HomePageLazy = lazy(() => import("../pages/Home/index"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FullScreenLoader />}>
        <HomePageLazy />
      </Suspense>
    ),
  },
]);
