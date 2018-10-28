import { ItemChildController } from '../controller';

let dummyData = [
  {
    id: '1',
    parentId: '1',
    childId: '2'
  },
  {
    id: '2',
    parentId: '2',
    childId: '3'
  },
  {
    id: '3',
    parentId: '3',
    childId: '4'
  },
  {
    id: '4',
    parentId: '4',
    childId: '1'
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
    this.itemChildController = null;
  }
}
