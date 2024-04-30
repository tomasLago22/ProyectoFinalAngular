import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosDetallesComponent } from './pages/usuarios-detalles/usuarios-detalles.component';


const routes: Routes = [


  {
    path: '',
    component: UsuariosComponent
  },
  {
    path:':id',
    component: UsuariosDetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
