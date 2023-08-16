-- CreateTable
CREATE TABLE "Pens" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "reactions" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pens_pkey" PRIMARY KEY ("id")
);
