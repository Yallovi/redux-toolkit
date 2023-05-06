/** @format */
import { api } from "../api";

type PayloadAllPokemon = {
  limit: number;
  offset: number;
};

export const allPokemon = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPokemon: builder.query<unknown, PayloadAllPokemon>({
      query: ({ limit, offset }) => `/pokemon?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useGetAllPokemonQuery } = allPokemon;
