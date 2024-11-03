import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {
      count: genres.length,
      results: genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
        image_background: genre.image_background,
      })),
    } as FetchResponse<Genre>,
  });
