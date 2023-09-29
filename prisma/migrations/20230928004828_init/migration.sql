/*
  Warnings:

  - Added the required column `image` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `drink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imaget` to the `food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `drink` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `food` ADD COLUMN `imaget` VARCHAR(191) NOT NULL;
