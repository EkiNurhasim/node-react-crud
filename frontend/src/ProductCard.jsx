import { toaster } from "@/components/ui/toaster";
import { Box, Button, Heading, HStack, Image, Input, Span, Text, VStack } from "@chakra-ui/react";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { userProductStore } from "./store/product";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = userProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (!success) {
      toaster.create({
        title: "Failed",
        description: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: "Success",
        description: "Product updated successfully",
        type: "success",
      });
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    const { success, message } = await updateProduct(id, updatedProduct);
    if (!success) {
      toaster.create({
        title: "Failed",
        description: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
      });
    }
  };

  return (
    <>
      <Box
        shadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      >
        <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />
        <Box p={4}>
          <Heading as={"h3"} size={"md"} mb={2}>
            {product.name}
          </Heading>

          <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>
            ${product.price}
          </Text>

          <HStack spacing={2}>
            <DialogRoot>
              <DialogTrigger>
                <Text as={Span} color={"blue.400"} _hover={{ color: "blue.600" }} fontSize={20}>
                  <MdEditSquare />
                </Text>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Product</DialogTitle>
                </DialogHeader>
                <DialogBody pb="4">
                  <VStack margin={"4"}>
                    <Field label="name">
                      <Input
                        name="nama"
                        placeholder="Product Name"
                        value={updatedProduct.name}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                      />
                    </Field>
                    <Field label="price">
                      <Input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={updatedProduct.price}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                      />
                    </Field>
                    <Field label="image">
                      <Input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={updatedProduct.image}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                      />
                    </Field>
                  </VStack>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogActionTrigger>
                  <DialogActionTrigger asChild>
                    <Button onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Save</Button>
                  </DialogActionTrigger>
                </DialogFooter>
              </DialogContent>
            </DialogRoot>

            <Text as={Span} color={"red.400"} _hover={{ color: "red.600" }} fontSize={20}>
              <RiDeleteBin2Fill onClick={() => handleDeleteProduct(product._id)} />
            </Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;
