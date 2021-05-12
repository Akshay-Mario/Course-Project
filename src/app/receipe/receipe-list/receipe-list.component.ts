import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe.model';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Receipe>();
  receipe: Receipe[] = [
    new Receipe('Recipe 1', 'this is  a test description', 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*'),
    new Receipe('Recipe 2', 'this is a test description', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/greens-good-luck-foods-1544214870.jpg?crop=1xw:0.667xh;center,top&resize=480:*')];
  constructor() { }

  ngOnInit(): void {
  }

  Onrecipeselected(selRecipe: Receipe) {
    this.selectedRecipe.emit(selRecipe);
  }

}
