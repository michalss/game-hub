import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) return <Spinner />;
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
