import WindowElement from "./WindowElement.js";
import Component from "../Component.js";

export default class LinkFile extends WindowElement {

  $file;

  constructor({ title, image, link, moveScale }) {
    super({ title, image, moveScale });
    this.link = link;
    this.$file = this.$container;

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