import { ICharacter } from "../../services/Characters/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface ICharactersState {
  page: number;
  characters: ICharacter[];
  loading: boolean;
}

const initialState: ICharactersState = {
  characters: [],
  page: 1,
  loading: false,
};
