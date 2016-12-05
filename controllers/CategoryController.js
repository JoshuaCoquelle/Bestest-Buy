(function(BB, undefined) {
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

    CategoryController.prototype.initializeCategories = function() {
        this.model.getCategoriesOnAppLoad();
    };

    CategoryController.prototype.appendCategoriesToList = function(categories) {
        this.view.appendAllCategories(categories);
    };

    BB.Controllers.CategoryController = CategoryController;
})(window.BestestBuy = window.BestestBuy || {});