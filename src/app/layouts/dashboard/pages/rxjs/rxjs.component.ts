import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
constructor(){
this.obtenerResultado()
this.ejecutarReloj()
}



  ejecutarReloj(){
    const obs =new Observable((observer)=>{
      observer.error('error al obtener la fecha')

      setInterval(() => {
        observer.next(new Date())
        observer.next(new Date())
      }, 2000);
      

      observer.complete()
    })

    obs.subscribe({

      //equivalente al then
      next: (resultado) => {
        console.log(resultado)
      },
      //equivalente al catch
      error: (error) => {
        console.error(error)
      },
      //equivalente al finally
      complete: () => {
        console.log('El reloj dejo de emitir valores')
      },
      //Cuando el observable no emite mas valores, se dispara el complete.
    })
  }



async obtenerResultado (){
  const meDevolveraElDinero = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(true);
        }, 3000);
      });

//para que se espere que esta linea suceda para poder seguir, se utiliza await
    await meDevolveraElDinero.then((resultado)=>{
      console.log(resultado);
          })
}
}
