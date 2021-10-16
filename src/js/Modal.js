import Component from "./Component.js";

export default class Modal {

  $modalContainer = Component.createElement({ type: 'div', className: 'modal-container' });
  $modalHeader = Component.createElement({ type: 'div', className: 'modal-header' })
  $modalBody = Component.createElement({ type: 'div', className: 'modal-body' })

  $modalButtonWrapper = Component.createElement({ type: 'div', className: 'modal-button-wrapper' });

  $closeButton = Component.createElement({ type: 'div', className: 'modal-close-button' });
  $closeButtonContent = Component.createElement({ type: 'div', className: 'close-button-content' });

  $minimizeButton = Component.createElement({ type: 'div', className: 'modal-minimize-button' });
  $minimizeButtonContent = Component.createElement({ type: 'div', className: 'minimize-button-content' });

  $maximizeButton = Component.createElement({ type: 'div', className: 'modal-maximize-button' });
  $maximizeButtonContent = Component.createElement({ type: 'div', className: 'maximize-button-content' });

  view = false;

  constructor({ files, scale = {x: 1, y: 1} }) {
    this.files = files;
    this.scale = scale;
    this.init();
    this.linkFiles();


    this.click();

    document.body.appendChild(this.$modalContainer)

  }

  init() {
    let unit = ['__', '☐', 'X'];
    let children = [this.$minimizeButtonContent, this.$maximizeButtonContent, this.$closeButtonContent];
    [this.$minimizeButton, this.$maximizeButton, this.$closeButton].forEach((element, index) => {
      children[index].textContent = unit[index];
      element.appendChild(children[index]);
      element.classList.add('modal-button');
      this.$modalButtonWrapper.appendChild(element);
    })

    this.$modalHeader.appendChild(this.$modalButtonWrapper);

    this.$modalContainer.appendChild(this.$modalHeader);
    this.$modalContainer.appendChild(this.$modalBody);

  }

  click() {
    this.$modalContainer.addEventListener('click', (e) => {
      let element = e.target;

      while(!element.classList.contains('modal-close-button')) {
        element = element.parentNode;
        if (element.nodeName === 'BODY') {
          element = null;
          return;
        }
      }

      this.$modalContainer.style.transform = `scale(0, 0)`
    })
  }

  linkFiles() {

    const component = new Component({ element: this.files });

    component.render(this.$modalBody);

  }

  open(origin) {
    this.$modalContainer.style.transformOrigin = `${origin.x}px ${origin.y}px`
    setTimeout(() => {
      this.$modalContainer.style.transform = `scale(${this.scale.x}, ${this.scale.y})`;
    }, 200)

  }

  style() {
  }

  get getModal() {
    return this.$modalContainer;
  }

}