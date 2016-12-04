(function(BB, undefined) {
    function ProductController(model, view) {
        var self = this;
        self.model = model;
        self.view = view;
        self.products = [];

        this.model.allProductsHaveLoaded.attach(function(model, products) {
            self.appendProductsToList(products);
        });
    }

    ProductController.prototype.initializeProducts = function() {
        this.model.getProductsOnAppLoad();
    };

    ProductController.prototype.appendProductsToList = function(products) {
        this.view.appendAllProducts(products);
    };

    BB.Controllers.ProductController = ProductController;
})(window.BestestBuy = window.BestestBuy || {});
