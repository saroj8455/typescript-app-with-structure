import { Request, Response, NextFunction } from 'express';
import * as LaptopService from "../services/laptop.service"
import { ILaptop } from '../utils';



async function saveLaptop(req: Request, res: Response, next: NextFunction) {
  const newLaptop = req.body as ILaptop
  try {
    return res.json(await LaptopService.create(newLaptop))
  } catch (error) {
    console.log(error);

  }
}


export {saveLaptop}