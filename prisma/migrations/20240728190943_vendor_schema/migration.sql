-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "vendorName" TEXT NOT NULL,
    "contractName" TEXT NOT NULL,
    "contractNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);
