-- CreateTable
CREATE TABLE "complianceIssue" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "assignTo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "complianceIssue_pkey" PRIMARY KEY ("id")
);
