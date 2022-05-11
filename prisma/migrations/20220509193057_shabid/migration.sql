/*
  Warnings:

  - You are about to drop the column `discount_price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `is_available` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `is_discount_price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_image` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `seller_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `gst_number` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Seller` table. All the data in the column will be lost.
  - Added the required column `discountPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Seller` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_seller_id_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discount_price",
DROP COLUMN "is_available",
DROP COLUMN "is_discount_price",
DROP COLUMN "product_image",
DROP COLUMN "seller_id",
DROP COLUMN "updateAt",
ADD COLUMN     "discountPrice" INTEGER NOT NULL,
ADD COLUMN     "isDiscounted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isStocked" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "productImages" TEXT[],
ADD COLUMN     "sellerId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "gst_number",
DROP COLUMN "phone_number",
DROP COLUMN "updateAt",
ADD COLUMN     "gstNumber" TEXT,
ADD COLUMN     "phoneNumber" VARCHAR(10) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
