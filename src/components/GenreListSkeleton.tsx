import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize={8} borderRadius={8} width="32px" />
        <SkeletonText fontSize="lg" noOfLines={1} width="80px" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
