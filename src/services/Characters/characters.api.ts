import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { API_BASE_URL } from "../../constants/API";

export const charactersApi = createApi({
  baseQuery: graphqlRequestBaseQuery({ url: API_BASE_URL }),
  endpoints: () => ({}),
});
