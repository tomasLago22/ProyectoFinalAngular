import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { UsuarioDialogoComponent } from './components/usuario-dialogo/usuario-dialogo.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';

import { PipesYDirectivasModule } from '../pipes-y-directivas/pipes-y-directivas.module';
import { UsuariosDetallesComponent } from './pages/usuarios-detalles/usuarios-detalles.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioDialogoComponent,
    UsuariosDetallesComponent,
    
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
    PipesYDirectivasModule,
    MatProgressSpinnerModule,
    
    
  ],

  exports: [

    UsuariosComponent,
    
  ]
})
export class UsuariosModule { }
