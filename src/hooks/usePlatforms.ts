import { useData } from "./useDate";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatform = () => useData<Platform>("/platforms/lists/parents");
