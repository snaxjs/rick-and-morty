import React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import FullScreenLoader from "components/FullScreenLoader";
import { PATHS } from "constants/paths";
import App from "../app";

const HomePageLazy = lazy(
  () => import(/* webpackChunkName: "home" */ "pages/Home/index"),
);
const LocationsPageLazy = lazy(
  () => import(/* webpackChunkName: "locations" */ "pages/Locations/index"),
);
const EpisodesPageLazy = lazy(
  () => import(/* webpackChunkName: "episodes" */ "pages/Episodes/index"),
);
const CharPageLazy = lazy(
  () => import(/* webpackChunkName: "char" */ "pages/Char/index"),
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
        path: PATHS.LOCATIONS,
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <LocationsPageLazy />
          </Suspense>
        ),
      },
      {
        path: PATHS.EPISODES,
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <EpisodesPageLazy />
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
