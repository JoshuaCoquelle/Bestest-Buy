(function(BB, undefined) {
    function ProductController(model, view) {
        var self = this;
        self.model = model;
        self.view = view;

        self.model.allProductsHaveLoaded.attach(function(model, products) {
            self.appendFirstProductsToList(products);
        });

        self.model.rerenderProductData.attach(function(model, products) {
            self.updateProductData(products);
        });

        self.model.productsHaveBeenUpdated.attach(function(model, products) {
            self.rerenderProductsUI(products);
        });
    }

    ProductController.prototype.initializeProducts = function() {
        this.model.getProductsOnAppLoad();
    };

    ProductController.prototype.appendFirstProductsToList = function(products) {
        this.view.appendAllProducts(products);
    };

    ProductController.prototype.getProductsByCategoryId = function(categoryId) {
        this.model.getProductsByCategory(categoryId);
    };

    ProductController.prototype.updateProductData = function(products) {
        this.model.updateProductsArray(products);
    };

    ProductController.prototype.rerenderProductsUI = function(products) {
        this.view.rerenderProductList(products);
    };

    BB.Controllers.ProductController = ProductController;
})(window.BestestBuy = window.BestestBuy || {});
