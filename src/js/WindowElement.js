import Component from "./Component.js";

export default class WindowElement {

  $container = Component.createElement({ type: 'div', className: 'window-element-container' });
  $windowElementImage = Component.createElement({ type: 'div', className: 'window-element-image' });
  $windowElementTitle = Component.createElement({ type: 'div', className: 'window-element-title' });

  initialMousePos = {
    x: 0, y: 0
  }

  offset = {
    x: 0,
    y: 0,
  };



  constructor({title, image}) {
    this.$windowElementTitle.textContent = title;
    this.$windowElementImage.style.backgroundImage = `url('${image}')`;

    this.move();

  }


  move() {
    const move = (e) => {
      const { clientX, clientY } = e;
      if((clientX < 40 || clientX > window.innerWidth - 40) || (clientY > window.innerHeight - 80 || clientY < 40)) {
        return;
      }

      this.offset.x = clientX - this.initialMousePos.x;
      this.offset.y = clientY - this.initialMousePos.y;


      this.$container.style.transform = `translate3d(${this.offset.x}px, ${this.offset.y}px, 0)`
    }

    this.$container.addEventListener('mousedown', (e) => {
      this.initialMousePos.x = e.clientX - this.offset.x;
      this.initialMousePos.y = e.clientY - this.offset.y;

      document.addEventListener('mousemove', move);
    })


    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);
    })

  }
}