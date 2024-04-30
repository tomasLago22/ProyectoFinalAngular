import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Usuario } from "../layouts/dashboard/pages/usuarios/models";

@Injectable({providedIn: 'root'})
export class AuthService {

 private _authUser$ = new BehaviorSubject <Usuario | null >(null)

    public authUser$ = this._authUser$.asObservable();

    login():void{
        

        this._authUser$.next({
            id: 1,
            firstName: 'Marcos',
            lastName: 'Acunia',
            email: 'Ma17@test.com',
            creacion: new Date(),
            role: 'Admin'

        })
    }

    logout(): void {
        this._authUser$.next(null); // Setear el BehaviorSubject a null al salir de la sesión
      }
}