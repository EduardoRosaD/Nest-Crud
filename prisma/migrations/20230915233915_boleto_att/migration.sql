/*
  Warnings:

  - You are about to drop the column `createdAt` on the `boletos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `boletos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "boletos" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "status" SET DEFAULT 'pendente',
ALTER COLUMN "status" SET DATA TYPE TEXT;
