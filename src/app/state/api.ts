import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
 baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
 reducerPath: "api",
 tagTypes: [],
 endpoints: (build) => ({})
});

export const {} = api;
