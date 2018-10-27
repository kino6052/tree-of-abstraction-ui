import ItemController from '../static/items/controller';
import { ItemView } from '../static/items/view';
import { ItemModel } from '../static/items/model';

let itemView = new ItemView();
let itemModel = new ItemModel();
let itemController = new ItemController(itemView, itemModel);

itemView.itemController = itemController;
itemModel.itemController = itemController;

console.log('here');
itemController.init();

// let root: HTMLElement | null = document.getElementById('root');
// if (root) {
//   root.innerText = 'Hello World';
//   root.setAttribute('style', 'color: red');
// }
