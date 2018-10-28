import { ItemModel } from '../model';
import { ItemView } from '../view';
import { ItemChildController } from '../../item-child/controller';
import { ItemChild, ItemChildModel } from '../../item-child/model';

export default class ItemController {
  itemView: ItemView;
  itemModel: ItemModel;
  itemChildController: ItemChildController;
  constructor(itemView: ItemView, itemModel: ItemModel) {
    this.itemView = itemView;
    this.itemModel = itemModel;

    let itemChildModel = new ItemChildModel();
    this.itemChildController = new ItemChildController(itemChildModel);
    itemChildModel.itemChildController = this.itemChildController;
  }
  init() {
    this.itemView.init(this);
  }
  // refresh() {
  //   this.itemView.refresh(this);
  // }
  getItemModelObjects() {
    return this.itemModel.itemModelObjects;
  }
  getItemChildren() {
    return this.itemChildController.getItemChildren();
  }
}
