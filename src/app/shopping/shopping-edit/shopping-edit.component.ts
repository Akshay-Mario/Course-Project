import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 

  item_name = '';
  item_amount: number = 0;
  constructor(private shopping: ShoppingService, private router: Router) { }

  additem(h: string) {
    if (h == '') {
      console.log('item name not entered', this.item_name, this.item_amount, h);
    }
    else {
      this.shopping.addnow({ name: h, amount: this.item_amount })
    }
  }

  Clearlist() {
    if (confirm('Are you sure you want to clear shopping list')) {
      this.shopping.clearall();
      /*this.router.navigate(['/']);*/
    }
      
  }

}
