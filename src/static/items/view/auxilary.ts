// Generate hierarchy of items and return the root htmlElement
import ItemController from '../controller';
import { itemHierarchyGenerator } from '../model/auxilary';
import { ItemModelObject } from '../model';

export const generateHierarchy = (root: HTMLElement, itemController: ItemController): HTMLElement => {
  let itemHierarchy = itemHierarchyGenerator(itemController);
  generateHTMLElementTree(root, itemHierarchy);
  return root;
}

const generateHTMLElementTree = (element: HTMLElement, itemHierarchy: { [id: string]: ItemModelObject & { children: Array<string> } } ) => {
  let id: string | null = element.getAttribute('id');
  if (id) {
      let item: ItemModelObject & { children: Array<string>} = itemHierarchy[<string> id];
      for (let childId of item.children) {
        let child = itemHierarchy[childId];
        let newElement = document.createElement('div');
        newElement.setAttribute('id', <string> child.id);
        newElement.textContent = <string> child.title;
        generateHTMLElementTree(newElement, itemHierarchy);
      }
  }
}
