-- CreateTable
CREATE TABLE "SportEvent" (
    "event_id" SERIAL NOT NULL,
    "event_name" TEXT NOT NULL,
    "odds" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SportEvent_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "Bet" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "playerName" TEXT NOT NULL,
    "potentialWin" DOUBLE PRECISION NOT NULL,
    "eventId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "SportEvent"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;
