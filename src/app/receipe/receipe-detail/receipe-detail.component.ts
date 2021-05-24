import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Receipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  selectedone: Receipe
  id: number;

  constructor(private recipe: RecipeService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.selectedone = this.recipe.getrecipebyid(+params['id'])
    });
  }

  addtoshop() {
    this.recipe.addtoshop(this.selectedone.ingredient);
  }
  DeleteRecipe() {
  }
}
