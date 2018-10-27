import { ItemModel, ItemModelObject } from '../model';
import { ItemView } from '../view';

export default class ItemController {
  itemView: ItemView;
  itemModel: ItemModel;
  constructor(itemView: ItemView, itemModel: ItemModel) {
    this.itemView = itemView;
    this.itemModel = itemModel;
  }
  init() {
    this.itemView.init(this);
  }
  refresh() {
    this.itemView.refresh(this);
  }
  getItemModelObjects() {
    return this.itemModel.itemModelObjects;
  }
}
