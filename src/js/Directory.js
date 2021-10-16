import WindowElement from "./WindowElement.js";
import Component from "./Component.js";

export default class Directory extends WindowElement {
  $directory;
  $directoryModal;
  constructor({ title, image, scale, modal }) {
    super({title, image, scale});
    this.$directoryModal = modal.getModal;
    this.modal = modal;

    this.createDirectory();
    this.dblClick();
  }

  dblClick() {
    this.$directory.addEventListener('dblclick', (e) => {
      this.modal.open({x: e.clientX, y: e.clientY})
    })
  }

  createDirectory() {
    let component = new Component({element: [ this.$windowElementImage, this.$windowElementTitle ]});
    component.render(this.$container);
    this.$directory = component.getParentComponent;
  }


  get getComponent() {
    return this.$directory;
  }
}