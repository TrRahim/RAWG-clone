import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { getCroppedImageUrl } from "../services/image-url";
import CriticScroe from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image, parent_platforms, metacritic, rating_top } =
    game;

  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScroe score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">{name}</Heading>
        <Emoji rating={rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
