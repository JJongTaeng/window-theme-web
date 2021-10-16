export default class Component {

  constructor({ element }) {
    this.element = element;
    this.$parentComponent;
  }

  render(parent) {

    this.checkNodeName(parent);

    this.$parentComponent = parent;

    if (this.element == null) {
      return;
    }

    this.attachChildrenToParent(parent);

  }

  attachChildrenToParent(parent) {

    const fragment = document.createDocumentFragment();

    if (this.element?.length) {
      this.element.forEach((element) => {
        fragment.appendChild(element);
      });
    } else {
      fragment.appendChild(this.element);
    }

    parent.appendChild(fragment);
  }

  checkNodeName(parent) {
    switch (parent.nodeName) {
      case 'IMG': case 'INPUT':
        throw new Error('### element img, input is not parent elemenet!');
    }
  }

  get getParentComponent() {
    return this.$parentComponent;
  }

  static createElement({type, className, content}) {
    const element = document.createElement(type)
    className && element.classList.add(className);
    element.textContent = content && content;

    return element;
  }
}