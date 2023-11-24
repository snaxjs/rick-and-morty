import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GOOGLE_SEARCH_API } from "constants/API";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const googleSearchApi = createApi({
  reducerPath: "googleSearchApi",
  baseQuery: fetchBaseQuery({ baseUrl: GOOGLE_SEARCH_API }),
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    searchImage: build.query<any, any>({
      query: (query) =>
        `?key=${process.env.GOOGLE_SEARCH_API_KEY}&searchType=image&cx=a0e008694376242be&q=${query}`,
    }),
  }),
});

export const { useSearchImageQuery } = googleSearchApi;
