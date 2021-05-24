import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdowndirective]'
})
export class DropdowndirectiveDirective implements OnInit {

  @HostBinding ('class.open')  open = false;

  constructor(private elref: ElementRef) { }

  ngOnInit() {
    }

  @HostListener('click') dropdowntoggle() {
    this.open = !this.open;
  } 

}
