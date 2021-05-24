import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { ingredients } from '../shared/ingridients.model';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  ing: ingredients[];

  constructor(private shopping: ShoppingService) { }

  

  ngOnInit() {
    this.ing = this.shopping.geting();
    this.shopping.ingservice.subscribe((ingr: ingredients[]) => {this.ing = ingr});

  }

  

}
