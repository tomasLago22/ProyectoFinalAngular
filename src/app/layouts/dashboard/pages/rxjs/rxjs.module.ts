import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';



@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RxjsComponent
  ]
})
export class RxjsModule { }
