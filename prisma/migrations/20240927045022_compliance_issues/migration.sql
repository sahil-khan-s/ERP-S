/*
  Warnings:

  - You are about to drop the `complianceIssue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "complianceIssue";

-- CreateTable
CREATE TABLE "complianceIssues" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "assignTo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "complianceIssues_pkey" PRIMARY KEY ("id")
);
