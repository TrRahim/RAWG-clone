import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { getCroppedImageUrl } from "../services/image-url";
import CriticScroe from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image, parent_platforms, metacritic, rating_top, slug } =
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
        <Heading fontSize="2xl">
          <Link to={`/games/${slug}`}>{name}</Link>
        </Heading>
        <Emoji rating={rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
