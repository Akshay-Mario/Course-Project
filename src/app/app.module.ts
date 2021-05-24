import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipe/receipe-list/receipe-item/receipe-item.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { UnlessDirective } from './unless.directive';
import { DropdowndirectiveDirective } from './shared/dropdowndirective.directive';
import { ClosedropdownDirective } from './shared/closedropdown.directive';
import { appRouter } from './router.module';
import { RecipeeditComponent } from './receipe/recipeedit/recipeedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    ReceipeComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingEditComponent,
    UnlessDirective,
    DropdowndirectiveDirective,
    ClosedropdownDirective,
    RecipeeditComponent
  ],
  imports: [
    BrowserModule,
  
    FormsModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
