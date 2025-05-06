// src/tests/BetCrd.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BetCard from "../components/BetCard";

describe("BetCard", () => {
  const defaultProps = {
    amount: 100,
    name: "Test Player",
    odds: 2.5,
    potentialWin: 250, // Added potentialWin to match component props
  };

  it("renders all bet information correctly", () => {
    render(<BetCard {...defaultProps} />);

    expect(screen.getByText("Test Player")).toBeInTheDocument();
    expect(screen.getByText("Bet: €100.00")).toBeInTheDocument();
    expect(screen.getByText("Potential Win: €250")).toBeInTheDocument();
    expect(screen.getByText("(Odds: 2.50)")).toBeInTheDocument();
  });

  it("shows 'Anonymous' when no name provided", () => {
    render(<BetCard {...defaultProps} name={undefined} />);
    expect(screen.getByText("Anonymous")).toBeInTheDocument();
  });

  it("displays different amounts and potential wins correctly", () => {
    const testCases = [
      { amount: 50, odds: 1.5, potentialWin: 75 },
      { amount: 123.45, odds: 3, potentialWin: 370.35 },
    ];

    testCases.forEach(({ amount, odds, potentialWin }) => {
      render(
        <BetCard
          {...defaultProps}
          amount={amount}
          odds={odds}
          potentialWin={potentialWin}
        />
      );

      expect(
        screen.getByText(`Bet: €${amount.toFixed(2)}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Potential Win: €${potentialWin}`)
      ).toBeInTheDocument();
    });
  });

  it("applies correct styling classes", () => {
    const { container } = render(<BetCard {...defaultProps} />);
    const card = container.firstChild;

    // Verify container classes
    expect(card).toHaveClass(
      "max-w-5xl",
      "mx-auto",
      "bg-gray-800",
      "rounded-xl",
      "p-6",
      "shadow-lg",
      "border-l-4",
      "border-emerald-500"
    );

    // Verify text styling
    const potentialWinText = screen.getByText(/Potential Win/);
    expect(potentialWinText).toHaveClass("text-emerald-400", "font-bold");

    const oddsText = screen.getByText(/Odds:/);
    expect(oddsText).toHaveClass("text-xs", "text-gray-400");
  });
});
