import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "./../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;

  //if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading
          ? skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)
          : data?.results.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    src={getCroppedImageUrl(genre.image_background)}
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                  />
                  <Button
                    whiteSpace="normal"
                    textAlign="left"
                    onClick={() => onSelectedGenre(genre)}
                    fontWeight={
                      genre.id === selectedGenreId ? "bold" : "normal"
                    }
                    variant="link"
                    fontSize="lg"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default GenreList;
