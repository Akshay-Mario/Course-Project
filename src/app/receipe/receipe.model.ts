import { ingredients } from "../shared/ingridients.model";

export class Receipe {
  public name: string;
  public description: string;
  public imgpath: string;
  public ingredient: ingredients[];

  constructor(name: string, desc: string, img: string, ing: ingredients[]) {
    this.name = name;
    this.description = desc;
    this.imgpath = img;
    this.ingredient = ing;
  }
}
