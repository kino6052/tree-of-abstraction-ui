import ItemController from '../controller';
import { ItemModelObject } from '../model';

export class UINode {
  id: String;
  htmlElement: HTMLElement | null;
  constructor(id: String) {
    this.id = id;
    this.htmlElement = document.getElementById(<string> id);
  }
  setContent(content: String) {
    if (this.htmlElement) {
      this.htmlElement.innerHTML = <string> content;
    }
  }
}

export class ItemView {
  itemController: ItemController;
  uiNodes: Array<UINode>;
  constructor(itemController: ItemController) {
    this.itemController = itemController;
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
      if (root) {
        root.appendChild(<Node> uiNode.htmlElement);
      }
    }

  }
  refresh(itemController: ItemController) {
  }
}
