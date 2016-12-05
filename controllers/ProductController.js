/*
| -----------------------------------------------------------------
| Product Controller
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * Product Controller Constructor.
     * 
     * @param {Model} model | A new model class instance.
     * @param {View} view   | A new view class instance.
     */
    function ProductController(model, view) {
        var self = this;
        self.model = model;
        self.view = view;
        self.attachObserverCallbacks();
    }

    /**
     * Register all callbacks for registered observers.
     */
    ProductController.prototype.attachObserverCallbacks = function() {
        var self = this;

        // Append products to product list UI on first page load.
        self.model.allProductsHaveLoaded.attach(function(model, products) {
            self.appendFirstProductsToList(products);
        });

        // Update the models product data from AJAX response data.
        self.model.rerenderProductData.attach(function(model, products) {
            self.updateProductData(products);
        });

        // Rerender the product UI after the model's products have been updated.
        self.model.productsHaveBeenUpdated.attach(function(model, products) {
            self.view.productModalEl.innerHTML = '';
            self.rerenderProductsUI(products);
        });

        // Render the product details modal when triggered.
        self.view.modalHasBeenTriggered.attach(function(modal, productDetails) {
            self.renderProductModal(productDetails);
        });
    };

    /**
     * Creates initial "All Products" data on page load.
     */
    ProductController.prototype.initializeProducts = function() {
        this.model.getProductsOnAppLoad();
    };

    /**
     * Fetch all products by category Id.
     */
    ProductController.prototype.getProductsByCategoryId = function(categoryId) {
        this.model.getProductsByCategory(categoryId);
    };

    /**
     * Set the model's products property to the newly retrieved products array.
     */
    ProductController.prototype.updateProductData = function(products) {
        this.model.updateProductsArray(products);
    };

    /**
     * Append UI elements for initial products load to products container.
     */
    ProductController.prototype.appendFirstProductsToList = function(products) {
        this.view.appendAllProducts(products);
    };

    /**
     * Rerender the product list elements when category has changed.
     */
    ProductController.prototype.rerenderProductsUI = function(products) {
        this.view.rerenderProductList(products);
    };

    /**
     * Create the product details modal and pass the details for selected product.
     */
    ProductController.prototype.renderProductModal = function(productDetails) {
        this.view.buildDetailsModal(productDetails);
    };

    BB.Controllers.ProductController = ProductController;
})(window.BestestBuy = window.BestestBuy || {});
