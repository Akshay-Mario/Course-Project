import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receipe } from './receipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css'],
  providers: [RecipeService]
})
export class ReceipeComponent implements OnInit {
  selectedrecipe: Receipe;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipeservice.selrecipe.subscribe((rec: Receipe) => { this.selectedrecipe = rec })
  }
  

}
