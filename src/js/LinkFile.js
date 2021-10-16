import WindowElement from "./WindowElement.js";
import Component from "./Component.js";

export default class LinkFile extends WindowElement {

  $file;

  constructor({ title, image, link, scale }) {
    super({ title, image, scale });

    this.link = link;

    let component = new Component({ element: [this.$windowElementImage, this.$windowElementTitle] });
    component.render(this.$container);

    this.$file = component.getParentComponent

    this.dbClick();
  }

  dbClick() {
    this.$file.addEventListener('dblclick', () => {
      window.open(this.link);
    })
  }

  get getComponent() {
    return this.$file;
  }
}