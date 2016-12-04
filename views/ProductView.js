(function(BB, undefined) {
    function ProductView() {
        this.productList = BB.DOM.PRODUCT_LIST;
        this.productListItem = BB.DOM.PRODUCT_LIST_ITEM;
    }

    ProductView.prototype.appendAllProducts = function(products) {
        var self = this;

        products.forEach(function(product) {
            var productEl = BB.Template.compile(self.productListItem, product);
            self.productList.insertAdjacentHTML('beforeend', productEl);
        });
    };
    
    BB.Views.ProductView = ProductView;
})(window.BestestBuy = window.BestestBuy || {});
