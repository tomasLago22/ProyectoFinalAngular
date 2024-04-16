import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiva]',
})
export class DirectivaDirective {
  constructor( private elementRef: ElementRef) { 
    console.log('DirectivaDirective se ha iniciado ')
    console.log(this.elementRef)

    this.elementRef.nativeElement.style.fontWeight = 750;
    
  }

}
