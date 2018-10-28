import { ItemChildModel, ItemChild } from '../model';

export class ItemChildController {
  itemChildModel: ItemChildModel;
  constructor(itemChildModel: ItemChildModel) {
    this.itemChildModel = itemChildModel;
  }
  getItemChildren(): Array<ItemChild> {
    return this.itemChildModel.itemChildren;
  }
}
