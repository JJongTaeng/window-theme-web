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

  $minimizedElementItem

  containerIsMaximize = true;
  isMinimized = false;
  constructor({ files, sizeScale = { x: 1, y: 1 } }) {
    this.files = files;
    this.sizeScale = sizeScale;

    this.createModalController();
    this.attachChildToParent();

    this.linkFiles();
    this.buttonClick();
    document.body.appendChild(this.$modalContainer)

  }


  buttonClick() {
    this.$modalContainer.addEventListener('click', (e) => {
      let element = e.target;

      while (!element.classList.contains('modal-button')) {
        element = element.parentNode;
        if (element.nodeName === 'BODY') {
          element = null;
          return;
        }
      }

      if (element.classList.contains('modal-close-button')) {
        this.resizeModalContainer(0, 0);
        this.removeMinimizedElementItem();
      } else if (element.classList.contains('modal-minimize-button')) {
        this.changeTransformOrigin();
        this.resizeModalContainer(0, 0);
        this.isMinimized = true;
      } else if (element.classList.contains('modal-maximize-button')) {

        if (this.containerIsMaximize) {
          this.reduceSize();
        } else {
          this.increaseSize();
        }
      }

    })
  }

  reduceSize() {
    this.sizeScale = {
      x: 0.7, y: 0.7
    }
    this.resizeModalContainer(this.sizeScale.x, this.sizeScale.y)
    this.containerIsMaximize = false;
  }

  increaseSize() {
    this.resizeModalContainer(1, 1)
    this.containerIsMaximize = true;
    this.sizeScale = {
      x: 1, y: 1
    }
  }

  minimizedElementClick() {
    this.$minimizedElementItem.addEventListener('click', () => {
      // if(!this.isMinimized) {
        this.resizeModalContainer(this.sizeScale.x, this.sizeScale.y);
        // this.isMinimized = true;
      // } else {
      //   this.changeTransformOrigin();
      //   this.resizeModalContainer(0, 0);
      //   this.isMinimized = false;
      // }

    })
  }

  resizeModalContainer(x, y) {
    setTimeout(() => {
      this.$modalContainer.style.transform = `scale(${x}, ${y})`
    }, 200)
  }

  changeTransformOrigin() {
    const { offsetLeft } = this.$minimizedElementItem;
    const { offsetTop } = this.$minimizedElementItem.offsetParent;
    this.$modalContainer.style.transformOrigin = `${offsetLeft}px ${offsetTop}px`
  }

  open(origin) {
    this.$modalContainer.style.transformOrigin = `${origin.x}px ${origin.y}px`
    setTimeout(() => {
      this.$modalContainer.style.transform = `scale(${this.sizeScale.x}, ${this.sizeScale.y})`;
    }, 200)

  }

  style() {
  }

  linkFiles() {

    const component = new Component({ element: this.files });

    component.render(this.$modalBody);

  }

  createModalController() {
    let unit = ['__', '☐', 'X'];
    let buttonContentList = [this.$minimizeButtonContent, this.$maximizeButtonContent, this.$closeButtonContent];
    [this.$minimizeButton, this.$maximizeButton, this.$closeButton].forEach((element, index) => {
      buttonContentList[index].textContent = unit[index];
      element.appendChild(buttonContentList[index]);
      element.classList.add('modal-button');
      this.$modalButtonWrapper.appendChild(element);
    })

  }

  attachChildToParent() {
    this.$modalHeader.appendChild(this.$modalButtonWrapper);
    this.$modalContainer.appendChild(this.$modalHeader);
    this.$modalContainer.appendChild(this.$modalBody);
  }

  setMinimizedElementItem(element) {
    this.$minimizedElementItem = element;
    this.minimizedElementClick();
  }

  removeMinimizedElementItem() {
    document.querySelector('.minimized-element-list').removeChild(this.$minimizedElementItem);
  }

  get getModal() {
    return this.$modalContainer;
  }

}