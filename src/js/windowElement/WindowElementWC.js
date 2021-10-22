export default class WindowElementWC extends HTMLElement {
  $image
  $title

  imageLink;
  title;

  initialMousePos = {
    x: 0, y: 0
  }

  offset = {
    x: 0, y: 0,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open'})

    const template = document.getElementById('window-element-template');
    this.shadowRoot.append(this.initStyle(), template.content.cloneNode(true));

    this.$container = this.shadowRoot.querySelector('.window-element-container')
    this.$image = this.shadowRoot.querySelector('.window-element-image');
    this.$title = this.shadowRoot.querySelector('.window-element-title');

    this.dbClick();
    this.move();
  }

  move() {
    const moveHandler = (e) => {

      if(this.checkRangeOfMotion(e.clientX, e.clientY)) {
        return;
      }

      this.offset.x = e.clientX - this.initialMousePos.x;
      this.offset.y = e.clientY - this.initialMousePos.y;
      this.$container.style.transform = `translate3d(${this.offset.x}px, ${this.offset.y}px, 0)`

    }


    this.$container.addEventListener('mousedown', (e) => {

      this.initialMousePos.x = e.clientX - this.offset.x;
      this.initialMousePos.y = e.clientY - this.offset.y;

      document.addEventListener('mousemove', moveHandler);
    })


    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveHandler);
    })

  }

  checkRangeOfMotion(clientX, clientY) {
    return (clientX < 40 || clientX > window.innerWidth - 40) || (clientY > window.innerHeight - 80 || clientY < 40)
  }

  dbClick() {
    this.shadowRoot.addEventListener('dblclick', () => {
      console.log(123)
    })
  }

  initStyle() {
    const $style = document.createElement('style');
    $style.textContent = `
      .window-element-container {
          width: 75px;
          height: 90px;
      
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 24px 16px;
      
          cursor: pointer;
      }
      
      .window-element-container.bordered {
          border: 1px dashed #ccc;
      }
      
      .window-element-image {
          height: 72px;
          width: 100%;
          flex-shrink: 0;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
      
      }
      
      .window-element-title {
          font-size: 16px;
          height: 18px;
          color: black;
          white-space: nowrap;
          margin-top: 6px;
      }
    `
    return $style;
  }

  connectedCallback() {
    this.imageLink = this.getAttribute('img');
    this.title = this.getAttribute('title');

    this.$image.style.backgroundImage = `url('${this.imageLink}')`;
    this.$title.textContent = this.title;
  }


  attributeChangedCallback(value, prev, current) {
    if (prev !== current) {

      switch (name) {
        case 'image-link':
          this.imageLink = current;
          break;
        case 'title':
          this.title = current;
      }

    }
  }
};

customElements.define('window-element', WindowElementWC);