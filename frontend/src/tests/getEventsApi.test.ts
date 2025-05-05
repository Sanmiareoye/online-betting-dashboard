import { getEventsAPI } from "../api/getEventsApi";
import { vi, test, expect, beforeEach } from "vitest";

// Mock fetch globally
global.fetch = vi.fn();

beforeEach(() => {
  vi.resetAllMocks();
});

test("getEventsAPI should return a list of events", async () => {
  const mockEvents = [
    { event_id: 1, event_name: "Soccer: A vs B", odds: 1.75, bets: [] },
    { event_id: 2, event_name: "Tennis: X vs Y", odds: 2.0, bets: [] },
  ];

  // @ts-ignore
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ data: mockEvents }),
  });

  const result = await getEventsAPI();

  expect(result).toEqual(mockEvents);
  expect(fetch).toHaveBeenCalledWith("http://localhost:8000/events");
});
