/*
| -----------------------------------------------------------------
| Category Model
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * Category Model Constructor
     */
    function Product() {
        this.products = [];
        this.allProductsHaveLoaded = new BB.Observer(this);
        this.rerenderProductData = new BB.Observer(this);
        this.productsHaveBeenUpdated = new BB.Observer(this);
    }

    Product.prototype.getProductsOnAppLoad = function() {
        var self = this;

        new BB.AJAX({
            url: 'http://www.bestbuy.ca/api/v2/json/search?categoryid=departments',
            method: 'GET',
            callback: function(data) {
                self.products = self.products.concat(data.products);
                self.allProductsHaveLoaded.notify(self.products);
            }
        }, true);
    };

    Product.prototype.getProductsByCategory = function(categoryId) {
        var self = this;

        new BB.AJAX({
            url: 'http://www.bestbuy.ca/api/v2/json/search?categoryid=' + categoryId,
            method: 'GET',
            callback: function(data) {
                self.rerenderProductData.notify(data.products);
            }
        }, true);
    };

    Product.prototype.updateProductsArray = function(products) {
        this.products = products || [];
        this.productsHaveBeenUpdated.notify(this.products);
    };

    /**
     * Expose Category Constructor
     */
    BB.Models.Product = Product;
})(window.BestestBuy = window.BestestBuy || {});