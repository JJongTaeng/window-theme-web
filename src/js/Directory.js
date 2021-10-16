import Component from "./Component.js";
import AddedElementBottom from "./AddedBottomElement.js";

export default class Directory extends AddedElementBottom {
  $directory;
  $directoryModal;

  constructor({ title, image, scale, modal }) {
    super({ title, image, scale });
    this.$directory = this.$container;
    this.$directoryModal = modal.getModal;
    this.modal = modal;

    this.dblClick();
  }

  dblClick() {
    this.$directory.addEventListener('dblclick', (e) => {
      this.modal.open({ x: e.clientX, y: e.clientY })
      this.$minimizedElementList.appendChild(this.$minimizedElementItem);
      this.modal.setMinimizedElementItem(this.$minimizedElementItem);
    })
  }


  get getComponent() {
    return this.$directory;
  }
}