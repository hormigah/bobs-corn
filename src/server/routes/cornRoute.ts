import express from "express";
import { buyCornController } from "../controllers/buyCornController";
import { counterCornController } from "../controllers/counterCornController";

const router = express.Router();

router.get("/:email", counterCornController);
router.post("/", buyCornController);

export default router;
