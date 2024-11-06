import { useTrailers } from "../hooks/useTrailers";

const GameTrailer = ({ gameId }: { gameId: number }) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = trailers?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
