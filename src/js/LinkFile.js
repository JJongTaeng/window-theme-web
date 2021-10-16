import WindowElement from "./WindowElement.js";
import Component from "./Component.js";

export default class LinkFile extends WindowElement {

  $file;

  constructor({ title, image, link, moveScale }) {
    super({ title, image, moveScale });
    this.link = link;

    this.createLinkFile();
    this.dbClick();
  }

  dbClick() {
    this.$file.addEventListener('dblclick', () => {
      window.open(this.link);
    })
  }

  createLinkFile() {
    let component = new Component({ element: [this.$windowElementImage, this.$windowElementTitle] });
    component.render(this.$container);
    this.$file = component.getParentComponent
  }

  get getComponent() {
    return this.$file;
  }

}