import { Component, Input, OnInit ,  EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input('singleitem') b: { name: string, description: string, imgpath: string };
  @Output() clickedrecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  recipeclick() {
    this.clickedrecipe.emit();
    console.log(this.b.description,this.b.name)
  }

}
