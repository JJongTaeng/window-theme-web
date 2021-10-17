import Component from "../Component.js";

export default class ContentModal {

  $container = Component.createElement({type: 'div', className: 'content-modal-container'});
  $contentWrapper = Component.createElement({type: 'div', className: 'content-modal-wrapper'});
  $contentText = Component.createElement({type: 'div', className: 'content-modal-text'});

  constructor({ content }) {
    this.content = content;

    document.body.appendChild(this.$container);
    this.$container.appendChild(this.$contentWrapper);
    this.$contentWrapper.appendChild(this.$contentText);
    this.$contentText.textContent = this.content;

    this.close();
  }

  open() {
    this.$container.classList.add('opened')
  }

  close() {
    this.$container.addEventListener('click', (e) => {
      if(e.target.classList.contains('content-modal-container')) {
        e.target.classList.remove('opened');
      }
    })
  }
};