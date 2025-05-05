import {
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
  TextField,
} from "@mui/material";
import { PostProps } from "../types";
import BetCard from "./BetCard";
import { useState } from "react";
import { placeBetAPI } from "../api/placeBetApi";

const SportEventCard = ({
  event_name,
  odds,
  bets,
  event_id,
  onError,
  clearForm,
  triggerRefresh,
}: PostProps) => {
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [betAmount, setBetAmount] = useState<string>("");
  const [showAllBets, setShowAllBets] = useState(false);
  const [name, setName] = useState<string>("");
  // Sort bets by most recent first
  const sortedBets = [...bets].sort((a, b) => b.id - a.id);
  const displayedBets = showAllBets ? sortedBets : sortedBets.slice(0, 5);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsedAmount = parseFloat(betAmount);
    if (!betAmount || isNaN(parsedAmount) || parsedAmount <= 0) {
      setLocalError("Please enter a valid bet amount.");
      return;
    }

    setLoading(true);
    setLocalError(null);
    onError?.("");

    try {
      await placeBetAPI(event_id, parsedAmount, name);

      setSuccess?.(
        ` You have succesfully placed a bet of €${parsedAmount} on ${event_name}, Goodluck! 🎰`
      );

      clearForm?.();
      triggerRefresh?.();
      setBetAmount("");
      setName("");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setLocalError(message);
      onError?.(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-700 max-w-4xl mx-auto p-4 space-y-6 rounded-xl">
      <h1 className="text-2xl font-bold">{event_name}</h1>
      <p className="">Odds: {odds}</p>
      {displayedBets.length > 0 ? (
        displayedBets.map((bet) => (
          <BetCard
            key={bet.id}
            amount={bet.amount}
            name={bet.playerName}
            odds={odds}
            potentialWin={bet.potentialWin}
          />
        ))
      ) : (
        <p>No bets placed yet.</p>
      )}
      {bets.length > 5 && (
        <button
          onClick={() => setShowAllBets(!showAllBets)}
          className="text-emerald-400 text-sm mt-2 hover:underline"
        >
          {showAllBets ? "Show less" : `Show all (${bets.length})`}
        </button>
      )}

      <form onSubmit={handleSubmit}>
        {success && (
          <Alert severity="success" sx={{ mt: 1 }}>
            <AlertTitle>Success!</AlertTitle>
            {success}
          </Alert>
        )}
        {localError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            <AlertTitle>Error</AlertTitle>
            {localError}
          </Alert>
        )}
        <TextField
          label="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{
            mt: 2,
            "& .MuiInputLabel-root": { color: "#10b981" },
            "& .MuiOutlinedInput-root": {
              color: "white",
              backgroundColor: "#1F2937",
              "& fieldset": { borderColor: "#10b981" },
              "&:hover fieldset": { borderColor: "#34d399" },
              "&.Mui-focused fieldset": { borderColor: "#10b981" },
            },
            "& .MuiInputBase-input": {
              textAlign: "center",
            },
          }}
        />

        <TextField
          label="Enter Bet Amount"
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          fullWidth
          sx={{
            mt: 2,
            "& .MuiInputLabel-root": {
              color: "#10b981",
            },
            "& .MuiOutlinedInput-root": {
              color: "white",
              backgroundColor: "#1F2937",
              "& fieldset": {
                borderColor: "#10b981",
              },
              "&:hover fieldset": {
                borderColor: "#34d399",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#10b981",
              },
            },
            "& .MuiInputBase-input": {
              textAlign: "center",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#10b981",
            "&:hover": {
              backgroundColor: "#059669",
            },
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          {loading ? "Processing..." : "Place Bet"}
        </Button>
      </form>
    </div>
  );
};

export default SportEventCard;
