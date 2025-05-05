import { Router } from "express";

import {
  getAllBets,
  getBetById,
  createBet,
  updateBet,
  deleteBet,
} from "../controllers/bet.controller";

const betRouter = Router();

betRouter.get("/", getAllBets);
betRouter.get("/:id", getBetById);
betRouter.post("/", createBet);
betRouter.put("/:id", updateBet);
betRouter.delete("/:id", deleteBet);

export default betRouter;
