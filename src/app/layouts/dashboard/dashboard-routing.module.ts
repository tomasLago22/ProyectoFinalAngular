import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './pages/home/home-routing.module';

const routes: Routes = [
  {  
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m)=> m.HomeModule) 
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then((m)=> m.UsuariosModule)
  },
  {
    path: 'products',
    loadChildren: ()=> import('./pages/products/products.module').then((m)=> m.ProductsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
