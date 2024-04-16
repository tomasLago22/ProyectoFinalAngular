import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  
  transform(firstName:string, lastName: string): string {
    
    return `${firstName} ${lastName}`
  }

}
