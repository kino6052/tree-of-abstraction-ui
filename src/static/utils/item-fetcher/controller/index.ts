

class ItemFetcher {
  itemFetcherModel: ItemFetcherModel;
  constructor(itemFetcherModel: ItemFetcherModel) {
    this.itemFetcherModel = itemFetcherModel;
  }
  getItems() {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.open('GET', 'items', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
  }
}
