import { CharGenderTypes } from "./types";

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
  episode: string[];
  location: ICharLocation;
  type: string;
  url: string;
}

export interface ICharOrigin {
  name: string;
}

export interface ICharLocation {
  name: string;
  url: string;
}
