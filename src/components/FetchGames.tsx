import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchiGamesResponse {
  count: number;
  results: Game[];
}

const FetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchiGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err));
  });
  return (
    <>
      {error && <p>Games was not found</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchGames;
