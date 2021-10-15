import WindowElement from "./WindowElement.js";
import Component from "./Component.js";

export default class Directory extends WindowElement {
  $directory;
  $directoryModal;
  constructor({ title, image, files, modal }) {
    super({title, image});

    let component = new Component({element: [ this.$windowElementImage, this.$windowElementTitle ]});
    component.render(this.$container);
    this.$directoryModal = modal;
    this.$directory = component.getParentComponent

    this.dblClick();
  }

  dblClick() {
    this.$directory.addEventListener('dblclick', (e) => {
      console.log(e.clientX, e.clientY);
      this.$directoryModal.style.transformOrigin = `${e.clientX}px ${e.clientY}px`
      setTimeout(() => {
        this.$directoryModal.style.transform = `scale(1, 1)`;
      }, 200)

    })
  }

  get getDirectory() {
    return this.$directory;
  }
}