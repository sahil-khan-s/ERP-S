-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('complete', 'incomplete');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "TaskStatus" NOT NULL DEFAULT 'complete',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
