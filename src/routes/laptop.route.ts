import express from 'express';

import * as LaptopController from '../controllers/laptop.controller';

const router = express.Router();

router.post("/",LaptopController.saveLaptop)

export default router;