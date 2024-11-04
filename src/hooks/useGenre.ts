import { usePlatforms } from "./usePlatforms";

export function useGenre(id?: number) {
  const { data } = usePlatforms();
  return data?.results.find((g) => g.id === id);
}
