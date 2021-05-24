import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { RecipeStartComponent } from './receipe/recipe-start/recipe-start.component';
import { RecipeeditComponent } from './receipe/recipeedit/recipeedit.component';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: ReceipeComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeeditComponent },
      { path: ':id', component: ReceipeDetailComponent },
      { path: ':id/edit', component: RecipeeditComponent }
    ]
  },
  { path: 'shopping', component: ShoppingComponent }

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule
  ]
})

export class appRouter {

}
