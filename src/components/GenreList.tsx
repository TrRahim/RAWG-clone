import { Text, VStack } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>Genres was not found</Text>}
      <VStack>
        {genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
