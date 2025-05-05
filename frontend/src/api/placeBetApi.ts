// src/api/placeBetApi.ts

export const placeBetAPI = async (
  eventId: number,
  amount: number,
  playerName: string
) => {
  const res = await fetch("http://localhost:8000/bets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount,
      eventId,
      playerName,
    }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || `Failed to place bet.`);
  }

  return res.json();
};
