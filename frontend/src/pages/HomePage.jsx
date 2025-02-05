import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { userProductStore } from "../store/product";

const HomePage = () => {
  const { fetchProduct, products } = userProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Container maxW={"full"}>
      <VStack margin={"3"}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          textAlign={"center"}
          color={"black"}
        >
          Current Product
        </Text>

        <SimpleGrid columns={{ base: "1", mid: "2", lg: "3" }} gap={"10"} w={"full"}>
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize={"small"} fontWeight={"normal"} textAlign={"center"} color={"gray"}>
            No product found <span> </span>
            <Link to={"/create"}>
              <Text
                as={"span"}
                fontSize={"sm"}
                fontWeight={"bold"}
                textAlign={"center"}
                color={"blue.400"}
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
