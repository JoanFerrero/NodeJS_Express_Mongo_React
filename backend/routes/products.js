import express from "express";
import { getProducts, createProducts } from "../controllers/products.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getProducts);

/* UPDATE */


export default router;