import { ItemChildController } from '../controller';

let dummyData = [
  {
    id: '1',
    parentId: '1',
    childId: '2'
  }
  {
    id: '1',
    parentId: '2',
    childId: '3'
  }
]

export interface ItemChild {
  id: String,
  parentId: String,
  childId: String
}

export class ItemChildModel {
  itemChildController: ItemChildController | null;
  itemChildren: Array<ItemChild>;
  constructor() {
    this.itemChildren = dummyData;
  }
}
