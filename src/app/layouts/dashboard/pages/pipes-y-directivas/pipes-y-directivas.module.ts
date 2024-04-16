import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';
import { TextTransformPipe } from './text-transform.pipe';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    PipesYDirectivasComponent,
    TextTransformPipe
  ],
  imports: [
    CommonModule,
    PipesYDirectivasRoutingModule,
    SharedModule
    
  ],
  exports:[
    PipesYDirectivasComponent,
    TextTransformPipe
    
  ]
})
export class PipesYDirectivasModule { }
