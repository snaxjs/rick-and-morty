import { configureStore } from "@reduxjs/toolkit";
// Api reducers
import { characterApi } from "services/Characters/characters.api";
// Reducers
import { charactersReducer } from "modules/CharactersCards/index";
import { google_searchApi } from "services/GoogleSearchApi/google_search.api";

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
    [google_searchApi.reducerPath]: google_searchApi.reducer,
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat([
      characterApi.middleware,
      google_searchApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
