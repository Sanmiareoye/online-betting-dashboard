// src/controllers/bet.controller.ts
import prisma from "../lib/db";
import { Response, Request, NextFunction } from "express";

// GET all bets
export const getAllBets = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const limit = parseInt(req.query.limit as string, 10);

    //isNan checks is its a number or not
    const allBets = await prisma.bet.findMany();
    if (!isNaN(limit) && limit > 0) {
      res.status(200).json({ data: allBets.slice(0, limit) });
    }
    res.status(200).json({ data: allBets });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch bets." });
  }
};

// GET bets by id
export const getBetById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const betId = parseInt(req.params.id);
    const allBets = await prisma.bet.findMany({
      where: {
        id: betId,
      },
    });
    res.status(200).json({ data: allBets });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch bet." });
  }
};

// POST create bet
export const createBet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { amount, eventId, playerName } = req.body;
    const event = await prisma.sportEvent.findUnique({
      where: { event_id: eventId },
      select: { odds: true },
    });

    if (!event) {
      res.status(404).json({ error: "Event not found" });
      return;
    }
    const potentialWin = parseFloat(amount) * event.odds;

    const bet = await prisma.bet.create({
      data: {
        amount: parseFloat(amount),

        event: {
          connect: { event_id: eventId },
        },
        playerName: playerName,
        potentialWin: potentialWin,
      },
    });

    res.status(200).json({ data: bet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create bet." });
  }
};

// update bet
export const updateBet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const betId = parseInt(req.params.id);
    const { amount } = req.body;
    const bet = await prisma.bet.update({
      where: {
        id: betId,
      },
      data: { amount },
    });
    res.status(200).json({ data: bet });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update bet." });
  }
};

// delete bet
export const deleteBet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const betId = parseInt(req.params.id);
    const bet = await prisma.bet.delete({
      where: {
        id: betId,
      },
    });
    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete bet." });
  }
};
