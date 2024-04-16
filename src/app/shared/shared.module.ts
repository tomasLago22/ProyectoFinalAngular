import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ErroresValidacionPipe } from './pipes/errores-validacion.pipe';
import { DirectivaDirective } from './directives/directiva.directive';



@NgModule({
  declarations: [

    
  
    ErroresValidacionPipe,
    DirectivaDirective
  ],
  imports: [
   
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    ErroresValidacionPipe
  ]

})
export class SharedModule { }
