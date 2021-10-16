import WindowElement from "./WindowElement.js";
import Component from "./Component.js";

export default class Directory extends WindowElement {
  $directory;
  $directoryModal;
  constructor({ title, image, modal }) {
    super({title, image});

    let component = new Component({element: [ this.$windowElementImage, this.$windowElementTitle ]});
    component.render(this.$container);
    this.$directoryModal = modal.getModal;
    this.$directory = component.getParentComponent
    this.modal = modal;
    this.dblClick();
  }

  dblClick() {
    this.$directory.addEventListener('dblclick', (e) => {
      this.modal.open({x: e.clientX, y: e.clientY})
    })
  }

  get getComponent() {
    return this.$directory;
  }
}