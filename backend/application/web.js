import dotenv from "dotenv";
import express from "express";
import productRoutes from "../routes/product.routes.js";
import path from "path";
dotenv.config();

const __dirname = path.resolve();

export const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// routes
app.use("/api", productRoutes);
