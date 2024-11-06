import { Image, SimpleGrid } from "@chakra-ui/react";
import { useScreenSchots } from "../hooks/useScreenShot";

const GameScreenShots = ({ gameId }: { gameId: number }) => {
  const { data: screenShots, error, isLoading } = useScreenSchots(gameId);
  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {screenShots?.results?.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
