/*
| -----------------------------------------------------------------
| Category Controller
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * CategoryController Constructor.
     * 
     * @param {Model} model                         | A new model instance.
     * @param {View} view                           | A new view instance.
     * @param {ProductController} productController | A nested Product Controller instance.
     */
    function CategoryController(model, view, productController) {
        var self = this;
        self.model = model;
        self.view = view;
        self.productController = productController;

        // Send all categories to be rendered by the view.
        self.model.applicationDataHasLoaded.attach(function(model, categories) {
            self.appendCategoriesToList(categories);
        });

        // Retrieve all products for the newly selected category.
        self.view.newCategorySelected.attach(function(sender, categoryId) {
            self.productController.getProductsByCategoryId(categoryId);
        });
    }

    /**
     * Model wrapper to load all categories from Buy Buy API. 
     */
    CategoryController.prototype.initializeCategories = function() {
        this.model.getCategoriesOnAppLoad();
    };

    /**
     * View wrapper to append all categoriy UI elements to container.
     */
    CategoryController.prototype.appendCategoriesToList = function(categories) {
        this.view.appendAllCategories(categories);
    };

    BB.Controllers.CategoryController = CategoryController;
})(window.BestestBuy = window.BestestBuy || {});