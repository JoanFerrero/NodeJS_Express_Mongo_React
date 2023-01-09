import express from "express";
import { getCard, addRemoveCard} from "../controllers/card.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router()

/* READ */
router.get("/:id", verifyToken , getCard)

/* UPDATE */
router.get("/:id/:productId", verifyToken, addRemoveCard)

export default router