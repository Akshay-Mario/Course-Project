import { Component, OnInit } from '@angular/core';

import { ingredients } from '../shared/ingridients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ing: ingredients[] = [
    new ingredients('Apples', 23),
    new ingredients('Orange', 45)
  ];

  ngOnInit(): void {
  }

  addnow(ingredient: ingredients) {

    this.ing.push({ name: ingredient.name, amount: ingredient.amount});

  }

}
