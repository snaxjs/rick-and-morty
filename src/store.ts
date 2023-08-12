import { configureStore } from "@reduxjs/toolkit";
// Api reducers
import { charactersApi } from "./services/Characters/characters.api";
// Reducers
import { reducer as charactersReducer } from "./modules/CharactersCards/index";

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
