import { Component, Input, OnInit ,  EventEmitter, Output  } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input('singleitem') b: Receipe;
/*  @Output() clickedrecipe = new EventEmitter<void>();*/
  @Input() index: number;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit(){

    

  }

  //recipeclick() {
  //  /*this.clickedrecipe.emit();*/
  //  console.log(this.b.description, this.b.name)
  //  this.recipeservice.selrecipe.emit(this.b);
    
  //}

}
