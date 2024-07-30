-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Accepted', 'Declined');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('Cash', 'Invoice', 'CreditCard');

-- CreateTable
CREATE TABLE "TransactionDetails" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "title" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransactionDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shopName" TEXT NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "approved" "Status" NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransactionList_pkey" PRIMARY KEY ("id")
);
