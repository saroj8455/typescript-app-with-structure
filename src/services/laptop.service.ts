import Laptop from '../model/laptop.model';
import { ILaptop } from '../utils';

async function create(data:ILaptop) {
  return new Laptop(data).save()
}

export {create};
