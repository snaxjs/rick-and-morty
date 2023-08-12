import { charactersApi } from "./characters.api";
import { IGetAllCharactersResponse } from "./interfaces";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { GetAllCharactersParams } from "./queries.types";
import { getAllCharacters } from "./queries";

const injectedRtkApi = charactersApi.injectEndpoints({
  //overrideExisting: module.hot?.status() === "apply",
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    getAllCharacters: build.query<
      IGetAllCharactersResponse,
      GetAllCharactersParams | void
    >({
      query: (variables) => ({ document: getAllCharacters, variables }),
    }),
  }),
});

export const { useGetAllCharactersQuery } = injectedRtkApi;
