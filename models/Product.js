/*
| -----------------------------------------------------------------
| Product Model
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * Category Model Constructor.
     * 
     * Initialize the products array and instantiate needed observers.
     */
    function Product() {
        this.products = [];
        this.allProductsHaveLoaded = new BB.Observer(this);
        this.rerenderProductData = new BB.Observer(this);
        this.productsHaveBeenUpdated = new BB.Observer(this);
    }

    /**
     * Once application foundation has been bootstrapped, call products API for first load.
     */
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

    /**
     * Get products by specified category from Best Buy API.
     */
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

    /**
     * Update Product instances products property from ajax callback data.
     */
    Product.prototype.updateProductsArray = function(products) {
        this.products = products || [];
        this.productsHaveBeenUpdated.notify(this.products);
    };

    BB.Models.Product = Product;
})(window.BestestBuy = window.BestestBuy || {});