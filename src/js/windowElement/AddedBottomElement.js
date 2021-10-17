import WindowElement from "./WindowElement.js";
import Component from "../Component.js";

export default class AddedBottomElement extends WindowElement{

  $minimizedElementList = document.querySelector('.minimized-element-list');
  $minimizedElementItem = Component.createElement({ type:'div', className: 'minimized-element-item' });
  constructor({title, image, scale}) {
    super({title, image, scale});

    this.$minimizedElementItem.style.backgroundImage = `url(${image})`;
  }
};