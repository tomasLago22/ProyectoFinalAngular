import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from './products/products.service';



export const RANDOM_NUMBER = new InjectionToken('RANDOM_NUMBER')
export const PRODUCTS = new InjectionToken('PRODUCTS')
@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    SharedModule,
    
  ],
  exports:[
    ProductsComponent
  ],
  providers:[
    {
      provide: ProductsService,
      useClass: ProductsService
    },
    {
      provide: RANDOM_NUMBER,
      useFactory: () => {
        return Math.random()
      }
    },
    {
      provide: PRODUCTS,
      useFactory: (productsService: ProductsService)=>{
        return  productsService.getProducts()
      },
      deps: [ProductsService]
    }
  ]
})
export class ProductsModule { }
