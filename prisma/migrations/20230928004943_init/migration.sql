/*
  Warnings:

  - You are about to drop the column `imaget` on the `food` table. All the data in the column will be lost.
  - Added the required column `image` to the `food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `food` DROP COLUMN `imaget`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;
