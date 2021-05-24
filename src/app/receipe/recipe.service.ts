import { Injectable, EventEmitter } from '@angular/core';
import { ingredients } from '../shared/ingridients.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Receipe } from './receipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selrecipe = new EventEmitter<Receipe>();
  

    private receipe: Receipe[] = [
      new Receipe('Recipe 1',
        'this is  a test description',
        'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*',
        [new ingredients('bread', 2),
         new ingredients('meat', 1)
        ]),
      new Receipe('Recipe 2', 'this is a test description',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/greens-good-luck-foods-1544214870.jpg?crop=1xw:0.667xh;center,top&resize=480:*',
        [new ingredients('tomato', 2),
          new ingredients('banana', 1)])
    ];

  constructor(private shopping: ShoppingService) { }

  getrecipe() {
    return this.receipe.slice();//slice creates a exact copy of recipe so now we really cannot access receipe we can only access a copy
  }

  getrecipebyid(id: number) {
    return this.receipe[id];
  }

  addtoshop(ingr: ingredients[]) {
    this.shopping.addtoshopping(ingr);
  }

}
