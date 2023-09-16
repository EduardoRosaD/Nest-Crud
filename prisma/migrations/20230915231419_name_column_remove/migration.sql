/*
  Warnings:

  - You are about to drop the column `name` on the `boletos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "boletos" DROP COLUMN "name",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
