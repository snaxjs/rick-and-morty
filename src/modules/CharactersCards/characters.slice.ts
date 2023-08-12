import { ICharacter } from "../../services/Characters/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICharactersState {
  page: number;
  characters: ICharacter[];
}

const initialState: ICharactersState = {
  characters: [],
  page: 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { setPage, setCharacters } = charactersSlice.actions;
export const { reducer } = charactersSlice;
