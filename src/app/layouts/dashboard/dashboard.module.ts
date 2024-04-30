import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { PipesYDirectivasModule } from './pages/pipes-y-directivas/pipes-y-directivas.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from './pages/products/products.module';
import { RxjsModule } from './pages/rxjs/rxjs.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UsuariosModule,
    PipesYDirectivasModule,
    SharedModule,
    ProductsModule,
    RxjsModule,
    MatListModule
  ],

  exports: [DashboardComponent]
})
export class DashboardModule { }
