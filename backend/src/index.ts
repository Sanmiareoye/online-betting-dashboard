import express from "express";
import eventRouter from "./routes/sportEvent.router";
import betRouter from "./routes/bet.router";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/events", eventRouter);
app.use("/bets", betRouter);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" }).status(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
