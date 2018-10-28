import ItemController from '../controller/index';
import { ItemModelObject } from '../model/index';

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
  uiNodes: Array<UINode>;
  constructor() {
    this.itemController = null;
    this.uiNodes = [];
  }
  init(itemController: ItemController) {
    let root = document.getElementById('root');
    let itemModelObjects: Array<ItemModelObject> = itemController.getItemModelObjects()
    for (let itemModelObject of itemModelObjects) {
      let {
        title,
        content,
        id
      } = itemModelObject;
      let uiNode = new UINode(id);
      uiNode.setContent(
`
<div>${title}</div>
<div>${content}</div>
`
      );
      this.uiNodes.push(uiNode);
      if (root && uiNode.htmlElement) {
        root.appendChild(uiNode.htmlElement);
      }
    }

  }
  // refresh(itemController: ItemController) {
  // }
}
