import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "./../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;

  //if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {isLoading
          ? skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)
          : genres.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    src={getCroppedImageUrl(genre.image_background)}
                    boxSize="32px"
                    borderRadius={8}
                  />
                  <Button
                    onClick={() => onSelectedGenre(genre)}
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
