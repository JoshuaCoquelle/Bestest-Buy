(function(BB, undefined) {
    function CategoryController(model, view) {
        this.model = model;
        this.view = view;

        this.model.applicationHasLoaded.attach(function() {
            self.initializeCategories();
        });
    }

    CategoryController.prototype.initializeCategories = function() {
        this.model.getCategoriesOnAppLoad();
    };

    BestestBuy.Controllers.CategoryController = CategoryController;
})(window.BestestBuy = window.BestestBuy || {});