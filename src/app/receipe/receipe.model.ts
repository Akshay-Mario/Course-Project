export class Receipe {
  public name: string;
  public description: string;
  public imgpath: string;

  constructor(name: string, desc: string, img: string) {
    this.name = name;
    this.description = desc;
    this.imgpath = img;

  }
}
