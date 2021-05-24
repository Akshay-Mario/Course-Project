import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { RecipeService } from '../receipe/recipe.service';
import { ingredients } from '../shared/ingridients.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService implements OnInit {

  ingservice = new EventEmitter<ingredients[]>();

  private ing: ingredients[] = [
    new ingredients('Apples', 23),
    new ingredients('Orange', 45)
  ];

  constructor() { }

  ngOnInit() {
   
  }


  geting() {
    return this.ing.slice();
  }


  addnow(ingredient: ingredients) {

    this.ing.push({ name: ingredient.name, amount: ingredient.amount });
    this.ingservice.emit(this.ing.slice());//instead of using emit we can also remove slice and pass this.ing(line 18). this way is used so that we can access private ing's copy from anywhere
  }

  addtoshopping(ingre: ingredients[]) {
    this.ing.push(...ingre);
    this.ingservice.emit(this.ing.slice());
  }

  clearall() {
    this.ing = [];
    this.ingservice.emit(this.ing.slice());
  }

}
