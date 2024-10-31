import { useData } from "./useDate";

export interface Genre {
  id: number;
  name: string;
}

export const useGenres = () => useData<Genre>("/genres");
