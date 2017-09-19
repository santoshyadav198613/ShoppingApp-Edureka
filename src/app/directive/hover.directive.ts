
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.background = 'red';
  }

  constructor(private el: ElementRef) {
   el.nativeElement.style.background = 'red';
  }




}
