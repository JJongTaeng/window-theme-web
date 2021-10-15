import WindowElement from "./WindowElement.js";
import Component from "./Component.js";

export default class LinkFile extends WindowElement {

  $file;

  constructor({ title, image, link }) {
    super({ title, image });

    this.link = link;

    let component = new Component({ element: [this.$windowElementImage, this.$windowElementTitle] });
    component.render(this.$container);

    this.$file = component.getParentComponent

    this.dbClick();
  }

  dbClick() {
    this.$file.addEventListener('dblclick', () => {
      console.log(123);
      window.open(this.link);
    })
  }

  get getFile() {
    return this.$file;
  }
}