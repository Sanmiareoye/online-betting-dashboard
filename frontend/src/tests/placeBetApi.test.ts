import { vi, test, expect } from "vitest";
import { placeBetAPI } from "../api/placeBetApi";

test("successful bet placement returns data", async () => {
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  const mockResponse = {
    id: 1,
    amount: 100,
    playerName: "Test Player",
    eventId: 10,
  };

  mockFetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockResponse,
  });

  const result = await placeBetAPI(10, 100, "Test Player");

  expect(result).toEqual(mockResponse);
  expect(mockFetch).toHaveBeenCalledTimes(1);

  const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
  expect(callBody).toEqual({
    eventId: 10,
    amount: 100,
    playerName: "Test Player",
  });
});

test("handles API error responses", async () => {
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  mockFetch.mockResolvedValueOnce({
    ok: false,
    status: 400,
    json: async () => ({ message: "Invalid bet amount" }),
  });

  await expect(placeBetAPI(10, -50, "Test Player")).rejects.toThrow(
    "Invalid bet amount"
  );
});

test("handles network errors", async () => {
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  mockFetch.mockRejectedValueOnce(new Error("Network error"));

  await expect(placeBetAPI(10, 100, "Test Player")).rejects.toThrow(
    "Network error"
  );
});

test("works without player name when optional", async () => {
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  mockFetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ id: 2, amount: 200, eventId: 10 }),
  });

  const result = await placeBetAPI(10, 200, "");

  expect(result.eventId).toBe(10);
  expect(result.amount).toBe(200);
});
