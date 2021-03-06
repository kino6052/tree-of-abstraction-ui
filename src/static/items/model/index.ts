import ItemController from '../controller';

export class ItemModelObject {
  id: String;
  title: String;
  content: String;
  constructor(id: String, title: String, content: String) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

let dummyData: Array<ItemModelObject> = [
  {
    id: '1',
    title: 'One',
    content: 'One'
  },
  {
    id: '2',
    title: 'Two',
    content: 'Two'
  },
  {
    id: '3',
    title: 'Three',
    content: 'Three'
  }
]

export class ItemModel {
  itemController: ItemController | null;
  itemModelObjects: Array<ItemModelObject>;
  constructor() {
    this.itemController = null;
    this.itemModelObjects = dummyData;
  }
  init() {
  }
  refresh() {
  }
}
