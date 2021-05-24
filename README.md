# Aashoppin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
DESCRIPTION

This project consists 3 main components:
  1.HEADER COMPONENT
  2.RECIPE COMPONENT
  3.SHOPPING COMPONENT

HEADER COMPONENT:
   It has a nav-tab where we can select between recipe and shopping component. By default recipe component is loaded first.
And navigation between recipe and shopping are done by using routing.(routing.module.ts).There is also a manage-DropDown(No functionality is added to it as of now)
2.RECIPE COMPONENT:
   First we can see a new recipe button(No Funtionality have been added) then below that recipe-List and to the side Recipe-start component
   Recipe component has 4 child component 
      1.Recipe-list
      2.Recipeedit
      3.Recipe-start
      4.Recipe-Detail
     2.1.Recipe-List:
           It shows the List of Recipes present; Here i have added only 2 test recipes. If we select one of these recipe it will get loaded on the side replacing 
        Recipe-Start with Recipe-Details Component.
     2.4.Recipe-Details:
           It shows the Details of the Recipe Such as image,Name, Description, Manage Recipe(DropDown) and Ingredients.Manage Recipe Drop down has "add To 
        Shopping List"(which adds ingredients to the existing list of shopping List), "Edit Recipe"(Routing has been added but no functionality is added to it)
        and "Delete Recipe"(As of now no functionality has been added)
3.SHOPPING COMPONENT:
    There are 2 input areas where we can type in the name of ingredient and amount of ingredient and when submit is pressed it is added to the existing list of ingrdients.
  Delete button is not given any functionality yet.Clear button is used to clear shopping list.

Services:
 There are 2 services
  1. Recipeservice:
       It stores details of the recipe such as name, description, ingredients and image path. Recipe-details component fetches data from recipe services.
  2. Shopping service:
       It stores ingredients in shopping list and has functions to edit them and pass ingredients cross component same as recipe service;

Directives:
  Directive defined on app/shared folder closeddropdown.directive.ts is used to close dropdown that are open by clicking any where on the screen except the drop down itself.

Routing:
  Routing are defined in router.module.ts in "/app"

