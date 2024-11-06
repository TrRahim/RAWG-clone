import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableTex from "../components/ExpandableTex";
import { useGame } from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableTex>{game.description_raw}</ExpandableTex>
    </>
  );
};

export default GameDetailPage;
