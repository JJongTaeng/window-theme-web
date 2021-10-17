import { request } from "../request.js";
import { url } from "../config.js";

export default class ContextMenu {

  $contextMenuContainer = document.querySelector('.context-menu-container');
  $contextMenuContent = document.querySelector('.context-menu-content');
  $inputContainer = document.querySelector('.input-container');
  $inputTitle = document.querySelector('.input-title');
  $inputContent = document.querySelector('.input-content');
  title;
  content;

  constructor({ directory }) {
    this.directory = directory;

    this.$contextMenuContent.addEventListener('click', (e) => {
      this.$contextMenuContainer.style.transform = `scale(0, 0)`;
      this.$inputContainer.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1, 1)`;
    })

    this.$inputContainer.addEventListener('click', (e) => {
      const element = e.target;
      switch (element.className) {
        case 'submit-button':
          console.log(this.title, this.content);
          request.post(url, { title: this.title, content: this.content }).then(() => {
            this.$inputContainer.style.transform = `scale(0, 0)`;
            this.$inputTitle.value = null;
            this.$inputContent.value = null;
            this.title = null;
            this.content = null;
            this.directory.reRender();
          })
          break;
        case 'cancel-button':
          this.$inputContainer.style.transform = `scale(0, 0)`;
          break;
      }
    })

    this.$inputTitle.addEventListener('input', (e) => {
      this.title = e.target.value;
    })

    this.$inputContent.addEventListener('input', (e) => {
      this.content = e.target.value;
    })
  }


  open(x, y) {
    this.$contextMenuContainer.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1, 1)`;
  }

};