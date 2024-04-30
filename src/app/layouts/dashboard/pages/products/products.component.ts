import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from './products/products.service';
import { IProduct } from './models';
import { PRODUCTS, RANDOM_NUMBER } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] 
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'precio', 'acciones'];
  // products: IProduct[] = [];

  constructor(private productsService: ProductsService,
    @Inject(RANDOM_NUMBER)private randomNumber: number,
    @Inject(PRODUCTS) public products : IProduct[]
  ) {
    console.log('Random Number: ', this.randomNumber)
  }

  ngOnInit(): void {
   
}

}