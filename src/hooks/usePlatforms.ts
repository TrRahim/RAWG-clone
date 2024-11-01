import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatform = () => {
  const results = platforms.results;

  return {
    platforms: results,
    error: false,
  };
};
