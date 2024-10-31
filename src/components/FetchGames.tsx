import { useGames } from "./../hooks/useGames";

const FetchGames = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <p>Games was not found</p>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchGames;
