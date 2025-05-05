import { PrismaClient } from "@prisma/client/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.sportEvent.createMany({
    data: [
      { event_name: "Soccer: Team A vs Team B", odds: 1.75 },
      { event_name: "Basketball: Team C vs Team D", odds: 2.1 },
      { event_name: "Tennis: Player E vs Player F", odds: 1.95 },
      { event_name: "MMA: Fighter G vs Fighter H", odds: 1.6 },
      { event_name: "Baseball: Team I vs Team J", odds: 2.25 },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
