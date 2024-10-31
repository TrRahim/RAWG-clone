import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScroe = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={1}>
      {score}
    </Badge>
  );
};

export default CriticScroe;
