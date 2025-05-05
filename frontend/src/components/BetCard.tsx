const BetCard = ({
  amount,
  name,
  odds,
  potentialWin,
}: {
  amount: number;
  name?: string;
  odds: number;
  potentialWin: number;
}) => {
  return (
    <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-emerald-500 transition-all hover:shadow-xl hover:translate-y-[-2px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">{name || "Anonymous"}</p>
          <p className="text-sm text-gray-400">Bet: €{amount.toFixed(2)}</p>
        </div>
        <div className="text-right">
          <p className="text-emerald-400 font-bold">
            Potential Win: €{potentialWin}
          </p>
          <p className="text-xs text-gray-400">(Odds: {odds.toFixed(2)})</p>
        </div>
      </div>
    </div>
  );
};

export default BetCard;
