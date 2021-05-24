import { Component, OnInit} from '@angular/core';
import { Receipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 
  receipe: Receipe[];

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.receipe = this.recipeservice.getrecipe();
  }


}
