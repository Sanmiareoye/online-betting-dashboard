export type Bet = {
  id: number;
  amount: number;
  eventId: number;
  createdAt: string;
  playerName: string;
  potentialWin: number;
};

export type PostProps = {
  event_id: number;
  event_name: string;
  odds: number;
  bets: Bet[];
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
  clearForm?: () => void;
  triggerRefresh?: () => void;
};
