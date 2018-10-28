import ItemController from '../controller/index';
import { generateHierarchy } from './auxilary';

export class UINode {
  id: String;
  htmlElement: HTMLElement | null;
  constructor(id: String) {
    this.id = id;
    this.htmlElement = document.createElement('div');
    this.htmlElement.setAttribute('id', <string> id);
  }
  setContent(content: String) {
    if (this.htmlElement) {
      this.htmlElement.innerHTML = <string> content;
    }
  }
}

export class ItemView {
  itemController: ItemController | null;
  constructor() {
    this.itemController = null;
  }
  init(itemController: ItemController) {
    let root = document.getElementById('root');
    if (this.itemController && root) {
      let itemModelObjects = this.itemController.getItemModelObjects();
      let itemModelObject = itemModelObjects[0];
      root.setAttribute('id', <string> itemModelObject.id);
      generateHierarchy(root, itemController);
    }
  }
  // refresh(itemController: ItemController) {
  // }
}
