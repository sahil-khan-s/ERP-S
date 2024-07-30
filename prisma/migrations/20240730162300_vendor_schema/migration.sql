/*
  Warnings:

  - You are about to drop the column `contractName` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `contractNumber` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `vendorName` on the `Vendor` table. All the data in the column will be lost.
  - Added the required column `contractvalue` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorCategory` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "contractName",
DROP COLUMN "contractNumber",
DROP COLUMN "image",
DROP COLUMN "vendorName",
ADD COLUMN     "contractvalue" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "vendorCategory" TEXT NOT NULL;
