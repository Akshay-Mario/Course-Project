import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Receipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {
  recipe: Receipe;
  id: number;
  editMode = false;

  constructor(private recipeservice: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
  /*this.route.params.subscribe((params: Params) => { this.recipe = this.recipeservice.getrecipebyid(+params['id']) })*/
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    })
    
  }

}
