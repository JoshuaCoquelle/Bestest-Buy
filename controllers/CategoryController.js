(function(BB, undefined) {
    function CategoryController(model, view) {
        var self = this;

        this.model = model;
        this.view = view;

        this.model.applicationDataHasLoaded.attach(function(model, categories) {
            self.appendCategoriesToList(categories);
        });
    }

    // entry point after boot
    CategoryController.prototype.initializeCategories = function() {
        this.model.getCategoriesOnAppLoad();
    };

    CategoryController.prototype.appendCategoriesToList = function(categories) {
        this.view.appendAllCategories(categories);
    };

    BB.Controllers.CategoryController = CategoryController;
})(window.BestestBuy = window.BestestBuy || {});