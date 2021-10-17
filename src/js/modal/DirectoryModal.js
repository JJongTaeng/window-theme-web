import Component from "../Component.js";
import ContextMenu from "./ContextMenu.js";
import { request } from "../request.js";
import GuestBookFile from "../windowElement/GuestBookFile.js";
import ContentModal from "./ContentModal.js";
import { url } from "../config.js";

export default class DirectoryModal {

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

  constructor({ files, sizeScale = { x: 1, y: 1 }, createContextMenu = false }) {
    this.files = files;
    this.sizeScale = sizeScale;
    this.containerIsMaximize = true;
    this.contextMenu = createContextMenu && new ContextMenu({directory: this});
    this.initalMousePos = {
      x: 0, y: 0
    }
    this.offset = {
      x: 0, y: 0
    }

    this.createModalController();
    this.attachChildToParent();

    this.linkFiles();
    this.buttonClick();
    this.modalMove()
    this.newFile();
    document.body.appendChild(this.$modalContainer)

  }

  createContextMenu() {
    this.contextMenu = new ContextMenu({directory: this});
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

        const { offsetLeft } = this.$minimizedElementItem;
        const { offsetTop } = this.$minimizedElementItem.offsetParent;

        this.changeTransformOrigin(offsetLeft, offsetTop);

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

  modalMove() {
    const moveHandler = (e) => {
      this.offset.x = e.clientX - this.initalMousePos.x;
      this.offset.y = e.clientY - this.initalMousePos.y;

      this.$modalContainer.style.transform = `translate3d(${this.offset.x}px, ${this.offset.y}px, 0) scale(${this.sizeScale.x}, ${this.sizeScale.y})`
    }

    this.$modalHeader.addEventListener('mousedown', (e) => {

      if (e.target.classList.contains('modal-header')) {
        this.initalMousePos = {
          x: e.clientX - this.offset.x,
          y: e.clientY - this.offset.y,
        }

        document.addEventListener('mousemove', moveHandler);
      }
    })

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveHandler)
    });
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
      this.resizeModalContainer(this.sizeScale.x, this.sizeScale.y);
    })
  }

  resizeModalContainer(x, y) {
    setTimeout(() => {
      this.$modalContainer.style.transform = `scale(${x}, ${y})`
    }, 200)
  }

  changeTransformOrigin(x, y) {
    this.$modalContainer.style.transformOrigin = `${x}px ${y}px`
  }

  open(origin) {
    this.changeTransformOrigin(origin.x, origin.y)
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

  newFile() {
    this.$modalContainer.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      this.contextMenu.open(e.clientX, e.clientY);
    })
  }

  async reRender() {
    const response = await request.get(url)
    const data = await response.json();

    this.files = data.map(value => {
      const contentModal = new ContentModal({content: value.content});
      return new GuestBookFile({

        title: value?.title,
        image: './image/text.svg',
        moveScale: this.sizeScale,
        contentModal
      })
    })

    const component = new Component({ element: this.files.map(element => element.getComponent) });
    this.$modalBody.innerHTML = null;
    component.render(this.$modalBody);
  }

  get getModal() {
    return this.$modalContainer;
  }

}