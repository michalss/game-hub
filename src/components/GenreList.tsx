import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export const GenreList = () => {
  const { data } = useGenres();

  return (
    <List spacing={2}>
      {data.map((dat) => (
        <ListItem key={dat.id}>
          <HStack spacing={2}>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImageUrl(dat.image_background)}
            ></Image>
            <Text fontSize="lg">{dat.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
