import { configureStore } from "@reduxjs/toolkit";
// Api reducers
import { characterApi } from "services/Characters/characters.api";
// Reducers
import { charactersReducer } from "modules/CharactersCards/index";
import { googleSearchApi } from "services/GoogleSearchApi/googleSearch.api";

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
    [googleSearchApi.reducerPath]: googleSearchApi.reducer,
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat([
      characterApi.middleware,
      googleSearchApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
