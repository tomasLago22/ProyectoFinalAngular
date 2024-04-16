import { Component } from '@angular/core';
import { Usuario } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoComponent } from './components/usuario-dialogo/usuario-dialogo.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id','nombreCompleto', 'email','creacion', 'role','acciones'];
  

  usuarios: Usuario[] = [
    {
      id: 1,
      firstName: 'Gabriel',
      lastName: 'Arias',
      email: 'gabi@test.com',
      creacion: new Date(),
      role: 'Admin'
    },
    {
      id: 2 ,
      firstName: 'Agustin',
      lastName: 'Garcia Basso',
      email: 'agustingb@test.com',
      creacion: new Date(),
      role: 'Admin'
    },
    {
      id: 3 ,
      firstName: 'Marco',
      lastName: 'Di cesare',
      email: 'marco@test.com',
      creacion: new Date(),
      role: 'Admin'
    },
    {
      id: 4,
      firstName: 'Ivan',
      lastName: 'Pillud',
      email: 'pillud@test.com',
      creacion: new Date(),
      role: 'User'
    },
    {
      id: 5,
      firstName: 'Juan',
      lastName: 'Nardoni',
      email: 'juaniNardoni@test.com',
      creacion: new Date(),
      role: 'User'
    }
  ]

  constructor (private matDialog : MatDialog){}

  abrirDialogo(editandoUsuario? : Usuario) : void{
    this.matDialog
    .open(UsuarioDialogoComponent, {
      data: editandoUsuario,
    })
    .afterClosed()
    .subscribe({
    next: (result) =>{
        if(result){

          result.id= new Date(). getTime().toString().substring(0,3);
          result.creacion= new Date ()
          this.usuarios = [...this.usuarios, result]
        };
      },
    })
  }

  borrandoUsuario(id: number) : void{
    this.usuarios=this.usuarios.filter((u) => u.id != id)
  }


}
