import { configureStore } from "@reduxjs/toolkit";
// Api reducers
import { characterApi } from "./services/Characters/characters.api";
// Reducers
import { charactersReducer } from "./modules/CharactersCards/index";

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
