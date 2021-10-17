import WindowElement from "./WindowElement.js";

export default class GuestBookFile extends WindowElement {

  $guestBookFile;

  constructor({ title, image, contentModal, moveScale }) {
    super({ title, image, moveScale });
    this.contentModal = contentModal;
    this.$guestBookFile = this.$container;
    this.dbClick();

  }

  dbClick() {
    this.$guestBookFile.addEventListener('dblclick', () => {
      this.contentModal.open();
    })
  }

  get getComponent() {
    return this.$guestBookFile;
  }
}