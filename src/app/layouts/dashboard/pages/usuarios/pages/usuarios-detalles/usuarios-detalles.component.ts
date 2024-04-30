import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';
import { Observable, finalize } from 'rxjs';
import { Usuario } from '../../models';

@Component({
  selector: 'app-usuarios-detalles',
  templateUrl: './usuarios-detalles.component.html',
  styleUrl: './usuarios-detalles.component.scss'
})
export class UsuariosDetallesComponent {

usuario$: Observable<Usuario | undefined>


loading = false

constructor(private activatedRoute: ActivatedRoute,
           private usuariosService: UsuariosService){
  console.log(this.activatedRoute.snapshot.params['id'])

this.loading=true;
this.usuario$ = this.usuariosService.obtenerById(
  parseInt(this.activatedRoute.snapshot.params['id'])
).pipe(
  finalize(() => {
    this.loading=false
  })
)


}
}