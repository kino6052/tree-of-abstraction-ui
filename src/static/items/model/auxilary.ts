// Convert items list into a tree object with correct relationships
import ItemController from '../controller'
import { ItemModelObject } from '.';
import { ItemChild } from '../../item-child/model';

export const (itemController: ItemController) => {
  let itemChildren: Array<ItemChild> = itemController.getItemChildren();
  let itemModelObjects: Array<ItemModelObject> = itemController.getItemModelObjects();

  let itemModelObjectsMap: { [id: string]: ItemModelObject & { children: Array<string> } } = {};

  for (let itemModelObjectIndex in itemModelObjects) {
    let currentItem: ItemModelObject & { children: Array<string> } = <ItemModelObject & { children: Array<string> }> itemModelObjects[itemModelObjectIndex];
    itemModelObjectsMap[<string> currentItem.id] = currentItem;
  }
  for (let itemChildIndex in itemChildren) {
    let itemChild = itemChildren[itemChildIndex];
    let parentId = itemChild.parentId;
    let childId = itemChild.childId;
    if (itemModelObjectsMap[<string> parentId].children) {
      itemModelObjectsMap[<string> parentId].children.push(<string> childId);
    } else {
      itemModelObjectsMap[<string> parentId].children = [<string> childId];
    }
  }
  return itemModelObjectsMap;
}
