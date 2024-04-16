import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'erroresValidacion'
})
export class ErroresValidacionPipe implements PipeTransform {

  transform(value: ValidationErrors | undefined| null, ...args: unknown[]): unknown {
    if(value){
      let mensajes : string []= [];

      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const element = value[key];
        
          
          if(key === 'required') mensajes.push('Este campo es requerido')
          if(key === 'pattern') mensajes.push('No cumple con el formato requerido')

        }
      }

      return  mensajes.join('. ');
    }
    return null;
  }

}
