import prisma from "../lib/db";
import { Response, Request, NextFunction } from "express";

// GET all bets
export const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allEvents = await prisma.sportEvent.findMany({
      include: {
        bets: true,
      },
    });
    res.status(200).json({ data: allEvents });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch events." });
  }
};

// GET bets by id
export const getEventById = async (req: Request, res: Response) => {
  try {
    const eventId = parseInt(req.params.id);
    const allEvents = await prisma.sportEvent.findMany({
      where: {
        event_id: eventId,
      },
      include: {
        bets: true,
      },
    });
    res.status(200).json({ data: allEvents });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Event not found" });
  }
};

// POST create Event
export const createEvent = async (req: Request, res: Response) => {
  try {
    const { event_name, odds } = req.body;
    const eventData = await prisma.sportEvent.create({
      data: { event_name, odds },
    });
    res.status(200).json({ data: eventData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create event." });
  }
};

// update event
export const updateEvent = async (req: Request, res: Response) => {
  try {
    const eventId = parseInt(req.params.id);
    const { event_name, odds } = req.body;
    const event = await prisma.sportEvent.update({
      where: {
        event_id: eventId,
      },
      data: { event_name, odds },
    });
    res.status(200).json({ data: event });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update event." });
  }
};

// delete bet
export const deleteEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const eventId = parseInt(req.params.id);
    const event = await prisma.sportEvent.delete({
      where: {
        event_id: eventId,
      },
    });
    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete event." });
  }
};
