import { CharGenderTypes } from "./types";

export interface ICharactersService {
  getAllCharacters: (page?: number) => Promise<IGetAllCharactersResponse>;
}

export interface IGetAllCharactersResponse {
  info: {
    count: number;
    pages: number;
  };
  results: ICharacter[];
}

export interface ICharacter {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
  gender: CharGenderTypes;
  origin: ICharOrigin;
}

export interface ICharOrigin {
  name: string;
}
