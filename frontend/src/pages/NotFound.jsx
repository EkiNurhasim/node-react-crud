import { Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Text
      fontSize={{ base: "22", sm: "28" }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      textAlign={"center"}
      color={"black"}
    >
      404 NOT FOUND
    </Text>
  );
};

export default NotFound;
