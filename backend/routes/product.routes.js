import express from "express";
import productController from "../controller/product.controller.js";

const router = express.Router();

router.get("/products", productController.get);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.remove);

export default router;
