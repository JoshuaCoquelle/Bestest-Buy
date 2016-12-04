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
    }

    Product.prototype.getProductsOnAppLoad = function() {
        var self = this;

        categories = new BB.AJAX({
            url: 'http://www.bestbuy.ca/api/v2/json/search?categoryid=departments',
            method: 'GET',
            callback: function(data) {
                self.products = self.products.concat(data.products);
                self.allProductsHaveLoaded.notify(self.products);
            }
        }, true);
    };

    /**
     * Expose Category Constructor
     */
    BB.Models.Product = Product;
})(window.BestestBuy = window.BestestBuy || {});