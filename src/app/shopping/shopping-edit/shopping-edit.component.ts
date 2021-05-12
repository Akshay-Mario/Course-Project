import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addingitem = new EventEmitter<{ name: string, amount: number }>(); 

  item_name = '';
  item_amount: number=0;
  constructor() { }

  ngOnInit(): void {
  }

  additem(h: string) {
    this.addingitem.emit({ name: h, amount: this.item_amount })
    console.log('submit pressed', this.item_name, this.item_amount, h);
  }
}
