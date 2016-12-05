(function(BB, undefined) {
    function ProductView() {
        this.productList = BB.DOM.PRODUCT_LIST;
        this.productListItem = BB.DOM.PRODUCT_LIST_ITEM;
        this.rerenderProducts = new BB.Observer(this);
    }

    ProductView.prototype.appendAllProducts = function(products) {
        var self = this;

        products.forEach(function(product) {
            var productEl = BB.Template.compile(self.productListItem, product);
            self.productList.insertAdjacentHTML('beforeend', productEl);
        });
    };

    ProductView.prototype.rerenderProductList = function(products) {
        var self = this;
        self.productList.innerHTML = '';

        products.forEach(function(product) {
            var productEl = BB.Template.compile(self.productListItem, product);
            self.productList.innerHTML += productEl;
        });
    }
    
    BB.Views.ProductView = ProductView;
})(window.BestestBuy = window.BestestBuy || {});
