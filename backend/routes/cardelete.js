import express from "express";
import { removeAllCard} from "../controllers/card.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router()

router.get("/:id", verifyToken, removeAllCard)

export default router