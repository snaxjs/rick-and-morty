import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants/API";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { IGetAllCharactersResponse } from "./interfaces";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    getAllCharacters: build.query<IGetAllCharactersResponse, any>({
      query: (page = 1) => `/character/?page=${page}`,
    }),
  }),
});

export const { useGetAllCharactersQuery } = characterApi;
