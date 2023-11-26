import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "constants/api";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { IGetAllCharactersResponse } from "./interfaces";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    getAllCharacters: build.query<IGetAllCharactersResponse, number>({
      query: (page: number = 1) => `/character/?page=${page}`,
    }),
    getCharacter: build.query({
      query: (charId: number) => `/character/${charId}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterQuery } = characterApi;
