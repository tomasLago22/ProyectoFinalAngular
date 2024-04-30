import { Injectable } from "@angular/core";
import { Usuario } from "./models";
import { Observable, delay, of } from "rxjs";


const USUARIOS_DB: Usuario[]=[
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

@Injectable ({ providedIn: 'root'})
export class UsuariosService{

    obtenerUsuarios(): Observable<Usuario[]> {
        return of(USUARIOS_DB).pipe(delay(600))
    }

    obtenerById(id :number): Observable<Usuario | undefined>{
        return of (USUARIOS_DB.find((el)=> el.id ===id))
    }
}