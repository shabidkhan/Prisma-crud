const express = require('express');
const router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

// Here are creating 
require('../controllers/seller.controller')(prisma,router);
require('../controllers/product.controller')(prisma,router);

module.exports = router;