'use strict';
var ProductsModel = function ProductsModel(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
    this.ajaxResponse = '';
};

ProductsModel.prototype.getProducts = function getProducts(fn) {
    var oReq = new this.XMLHttpRequest();
    oReq.onload = function onLoad(e) {
        this.ajaxResponse = JSON.parse(e.currentTarget.responseText),
            fn(this.ajaxResponse);
    };
    oReq.open('GET', 'https://familyburger.com.ua/products.json', true);
    oReq.send();
};

var ProductsView = function ProductsView() {
    this.viewElement = document.getElementsByClassName('flex-row')[0];
    this.select = document.getElementById('selectMenu');
    this.description = document.getElementsByClassName("description")[0];
    this.image = document.getElementsByClassName("product-img")[0];
    this.loader = document.getElementsByClassName('loader')[0];
    this.table = document.getElementsByClassName('js-drinks-table')[0];
    this.ribbon = document.getElementsByClassName('ribbon')[0];
};

ProductsView.prototype.render = function render(viewModel) {
    var x,
        y,
        z,
        itemIdx,
        flag = true,
        option = this.select.options[this.select.selectedIndex].value,
        drinks = [],
        imgPreload = [];
    this.viewModel = viewModel;
    this.viewElement.innerHTML = '';
    this.table.innerHTML = '';
    if(option !== 'Drinks') {
    this.loader.classList.remove('contentLoaded');
    this.table.classList.remove('is-visible');
    for (x = 0; x < viewModel.length; x++) {
        if (viewModel[x].type === option) {
            if (flag) {
                itemIdx = x;
                flag = false;
            }
            this.viewElement.innerHTML += '<div class="item-img"><a href="#modal-fullscreen" data-toggle="modal"><h1 class="notify-badge">' +
                viewModel[x].name + '</h1><img src="images/menuLowQuality/img-' +
                (x + 1) + '.png"alt="' + viewModel[x].name + '"><h1 class="notify-badge add">' + viewModel[x].nameAdd + '</h1></a></div>';
            imgPreload.push(new Image());
        }
    }
    this.onClickShowDescription(itemIdx, imgPreload);
    $('.notify-badge').arctext({
        radius: 200
    });
    }
    else {
        this.table.classList.add('is-visible');
        var html = '<tbody>';
        for (y = 0; y < viewModel.length; y++) {
        if (viewModel[y].type === option) {
        drinks = viewModel[y].description.split(';');
        html += '<tr><th>' + viewModel[y].name + '</th>';
                for (z = 0; z < drinks.length; z++) {
                    if (z < drinks.length - 1) html += '<td>' +  drinks[z] + '</td>';
                    else html += '<td>' +  drinks[z] + '</td></tr>';
                }
            }
        }
        this.table.innerHTML = html + '</tbody>';
    }
};

ProductsView.prototype.showItemDescription = function showItemDescription(idxNum, firstNum) {
    if(this.viewModel[firstNum + idxNum].nameAdd === undefined || this.viewModel[firstNum + idxNum].nameAdd === null) this.viewModel[firstNum + idxNum].nameAdd = '';
    this.description.innerHTML = "<b>" + this.viewModel[firstNum + idxNum].name + ' ' + this.viewModel[firstNum + idxNum].nameAdd 
    + "</b><br>" + this.viewModel[firstNum + idxNum].description,
        this.image.style.backgroundImage = 'url("images/menuHighQuality/img-' + (firstNum + idxNum + 1) + '.png")';
    this.ribbon.innerHTML = this.viewModel[firstNum + idxNum].price;
}

var ProductsController = function ProductsController(productsModel, productsView) {
    this.productsModel = productsModel;
    this.productsView = productsView;
};

ProductsController.prototype.initialize = function initialize() {
    this.productsModel.getProducts(this.onLoadShowProducts.bind(this));
    this.productsView.onClickShowDescription = this.onClickShowDescription.bind(this);
    this.attachEvent(this.productsView.select, 'change', this.selectEventHandler.bind(this));
};

ProductsController.prototype.onLoadShowProducts = function onLoadShowProducts(productModelData) {
    this.productsView.render(productModelData);
};

ProductsController.prototype.selectEventHandler = function selectEventHandler() {
    this.productsView.render(this.productsView.viewModel);
}

ProductsController.prototype.attachEvent = function attachEvent(element, type, handler) {
    if (element.addEventListener) element.addEventListener(type, handler, false);
    else element.attachEvent("on" + type, handler);
}

ProductsController.prototype.itemsEventHandler = function itemsEventHandler(itemIndex, firstItem) {
    this.productsView.showItemDescription(itemIndex, firstItem);
}

ProductsController.prototype.onClickShowDescription = function onClickShowDescription(idx, images) {
    this.index = idx;
    var x,
        items = [],
        controller = this,
        items = Array.prototype.slice.call(document.getElementsByClassName('item-img'));
    for (x = 0; x < items.length; x++) {
        this.attachEvent(items[x], 'click', function () {
            controller.itemsEventHandler(items.indexOf(this), controller.index);
        });
        images[x].src = './images/menuHighQuality/img-' + (idx + x + 1) + '.png';
    }
    this.attachEvent(images[x - 1], 'load' ,function() {
        controller.productsView.loader.classList.add('contentLoaded');
    });
};

(function initialize() {
    var model = new ProductsModel(XMLHttpRequest),
        view = new ProductsView(),
        controller = new ProductsController(model, view);
    controller.initialize();
})();