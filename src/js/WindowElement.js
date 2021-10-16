import Component from "./Component.js";

export default class WindowElement {

  $container = Component.createElement({ type: 'div', className: 'window-element-container' });
  $windowElementImage = Component.createElement({ type: 'div', className: 'window-element-image' });
  $windowElementTitle = Component.createElement({ type: 'div', className: 'window-element-title' });
  $selectedElement;
  initialMousePos = {
    x: 0, y: 0
  }

  offset = {
    x: 0, y: 0,
  };

  constructor({title, image, moveScale = { x: 1, y: 1 }}) {
    this.moveScale = moveScale;
    this.$windowElementTitle.textContent = title;
    this.$windowElementImage.style.backgroundImage = `url('${image}')`;

    this.createWindowElement();

    this.move();
    this.findParentNode();

  }

  findParentNode() {
    this.$container.addEventListener('click', (e) => {
      let element = e.target;

      while(!element.classList.contains('window-element-container')) {
        element = element.parentNode;

        if (element.nodeName === 'BODY') {
          element = null;
          return;
        }
      }

      this.$parentNode = element.parentNode ? element.parentNode : null;
      this.focusElement();
    })
  }

  focusElement() {
    this.$parentNode.addEventListener('click', (e) => {
      let element = e.target;

      if (e.target === this.$parentNode) {
        this.removeBorderedChildren()
      }

      while(!element.classList.contains('window-element-container')) {
        element = element.parentNode;

        if (element.nodeName === 'BODY') {
          element = null;
          return;
        }
      }

      if (this.$selectedElement) {
        this.$selectedElement.classList.remove('bordered');
      }

      element.classList.add('bordered');
      this.$selectedElement = element;
    })
  }

  move() {
    const move = (e) => {
      if(this.checkRangeOfMotion(e.clientX, e.clientY)) {
        return;
      }

      this.setMovingElementPosition(e.clientX, e.clientY);
      this.setWindowElementPosition();
    }


    this.$container.addEventListener('mousedown', (e) => {

      this.resetPosition(e.clientX, e.clientY);

      document.addEventListener('mousemove', move);
    })


    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);
    })

  }

  removeBorderedChildren() {
    [...this.$parentNode.children].forEach(element => element.classList.remove('bordered'))
  }

  createWindowElement() {
    let component = new Component({ element: [this.$windowElementImage, this.$windowElementTitle] });
    component.render(this.$container);
  }

  resetPosition(clientX, clientY) {
    this.initialMousePos.x = clientX - this.offset.x;
    this.initialMousePos.y = clientY - this.offset.y;
  }

  setMovingElementPosition(clientX, clientY) {
    this.offset.x = clientX - this.initialMousePos.x;
    this.offset.y = clientY - this.initialMousePos.y;
  }

  checkRangeOfMotion(clientX, clientY) {
    return (clientX < 40 || clientX > window.innerWidth - 40) || (clientY > window.innerHeight - 80 || clientY < 40)
  }

  setWindowElementPosition() {
    this.$container.style.transform = `translate3d(${this.offset.x / this.moveScale.x}px, ${this.offset.y / this.moveScale.x}px, 0)`
  }
}