import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aashoppin';
  tabs = 'recipe';

  tabopen(h: string) {
  
    this.tabs = h;
  
  }
  
  
}
