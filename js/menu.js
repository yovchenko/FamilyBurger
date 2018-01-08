$(document).ready(function () {
  var price = document.getElementsByClassName('ribbon')[0],
    description = document.getElementsByClassName('description')[0],
    image = document.getElementsByClassName('product-img')[0];
  ProductsModel = function ProductsModel(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
  };
  ProductsModel.prototype.getProducts = function getProducts(index, fn) {
    var oReq = new this.XMLHttpRequest();
    oReq.onload = function onLoad(e) {
      var ajaxResponse = JSON.parse(e.currentTarget.responseText),
        product = ajaxResponse[index];
      fn(product);
    };

    oReq.open('GET', 'https://familyburger.com.ua/products.json', true);
    oReq.send();
  };
  var ProductsView = function ProductsView(element, items) {
    this.element = element;
    this.index = items.indexOf(element);
  };
  ProductsView.prototype.render = function render(viewModel) {
    var imageIndex = this.index + 1;
    price.innerHTML = String(viewModel.price);
    description.innerHTML = '<b>' + viewModel.name + '</b><br>' + viewModel.description;
    image.style.backgroundImage = 'url("images/product/img-' + imageIndex + '.png")';
  };
  ProductsView.prototype.slideDown = function slideDown() {
    var hgt = 25,
      interval = setInterval(function () {
        if (50 > hgt) {
          hgt += 0.5;
          price.style.height = hgt + "%";
        } else {
          price.style.height = hgt + "%";
          clearInterval(interval);
          interval = null;
        }
      }, 25);
  }
  var ProductsController = function ProductsController(productsView, productsModel) {
    this.productsView = productsView;
    this.productsModel = productsModel;
    this.productsModel.getProducts(this.productsView.index, this.onClickShowProduct.bind(this));
  };
  ProductsController.prototype.onClickShowProduct = function onClickShowProduct(productModelData) {
    this.productsView.slideDown();
    this.productsView.render(productModelData);
  };
  (function initialize() {
    var i,
      itemImg = Array.prototype.slice.call(document.querySelectorAll('.container .item-img')),
      productsModel = new ProductsModel(XMLHttpRequest),
      len = itemImg.length;
    for (i = 0; i < len; i++) {
      itemImg[i].onclick = function () {
        var productsView = new ProductsView(this, itemImg);
        var controller = new ProductsController(productsView, productsModel);
      }
    }
  })();
  window.addEventListener('load', function () {
    var y,
      allimages = document.getElementsByTagName('img'),
      allImgLen = allimages.length;
    for (y = 0; y < allImgLen; y++) {
      if (allimages[y].getAttribute('data-src')) {
        allimages[y].setAttribute('src', allimages[y].getAttribute('data-src'));
      }
    }
  }, false)
  $('.notify-badge').arctext({
    radius: 300
  });
});
