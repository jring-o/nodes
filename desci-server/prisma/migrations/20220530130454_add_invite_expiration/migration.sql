-- AlterTable
ALTER TABLE "Invite" ADD COLUMN     "expired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL DEFAULT '2001-01-01 00:00:00';