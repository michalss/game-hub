import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenShots from "../hooks/useSchreenshots";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data, isLoading, error } = useScreenShots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results?.map((file) => (
        <Image
          rounded={10}
          shadow={5}
          overflow="hidden"
          key={file.id}
          src={file.image}
        />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
