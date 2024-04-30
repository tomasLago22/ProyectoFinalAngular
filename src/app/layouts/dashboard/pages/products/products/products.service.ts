import { Injectable } from '@angular/core';
import { IProduct } from '../models';

@Injectable()
export class ProductsService {

  constructor() { }


  getProducts(): IProduct[]{
    return [
      {
        id:1,
        name: 'Angular',
        precio: 80000,
      },
      {
        id:2,
        name: 'Desarrollo Web',
        precio: 91000,
      },
      {
        id:3,
        name: 'JavaScript',
        precio: 68000,
      },
      {
        id:4,
        name: 'React',
        precio: 61000,
      },
    ]
    
  }
}
