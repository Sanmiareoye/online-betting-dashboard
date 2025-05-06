import { PrismaClient } from "@prisma/client/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.sportEvent.createMany({
    data: [
      {
        event_name: "🏈 NFL: Chiefs vs Eagles",
        odds: 1.8,
      },
      {
        event_name: "⚽️ EPL: Arsenal vs Chelsea",
        odds: 2.1,
      },
      {
        event_name: "🎾 Tennis: Djokovic vs Alcaraz",
        odds: 1.9,
      },

      {
        event_name: "🏀 NBA: Lakers vs Clippers",
        odds: 1.85,
      },
      {
        event_name: "⚽️ UCL: Real Madrid vs Bayern",
        odds: 1.95,
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
