import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiBookmarkPlus } from "react-icons/ci";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }}>
        <Text fontSize={{ base: "22", sm: "28" }} textTransform={"uppercase"} textAlign={"center"} color={"black"}>
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spaceX={2} spaceY={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiBookmarkPlus />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
