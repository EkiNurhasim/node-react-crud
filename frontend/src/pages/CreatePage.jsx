import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { userProductStore } from "../store/product";
import { toaster } from "@/components/ui/toaster";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = userProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toaster.create({
        title: "Failed",
        description: message,
        type: "error",
      });
    } else {
      setNewProduct({ name: "", price: "", image: "" });
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
      });
    }
  };

  return (
    <Container maxW={"1/3"}>
      <VStack margin={"4"}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={"8"}>
          Create new product
        </Heading>
        <Box w={"full"} p={"6"} rounded={"lg"} shadow={"md"}>
          <VStack margin={"4"}>
            <Input
              name="nama"
              placeholder="Product Name"
              onChange={(e) => setNewProduct((current) => ({ ...current, name: e.target.value }))}
              value={newProduct.name}
            />
            <Input
              type="number"
              name="price"
              placeholder="Price"
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              value={newProduct.price}
            />
            <Input
              type="text"
              name="image"
              placeholder="Image URL"
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              value={newProduct.image}
            />
            <Button type="button" w={"full"} onClick={handleAddProduct}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
