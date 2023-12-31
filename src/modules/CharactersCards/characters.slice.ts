import { ICharacter } from "services/Characters/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICharactersState {
  page: number;
  list: ICharacter[];
  totalPages: number;
}

const initialState: ICharactersState = {
  list: [],
  page: 1,
  totalPages: 0,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.list = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setPage, setCharacters, setTotalPages } =
  charactersSlice.actions;
export const { reducer } = charactersSlice;
