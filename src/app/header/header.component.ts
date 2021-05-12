import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() Selectedtab = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  Onselect(feature: string) {
    this.Selectedtab.emit(feature);
  }

}
