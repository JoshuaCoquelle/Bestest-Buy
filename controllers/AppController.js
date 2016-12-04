(function(BB, undefined) {
    function ApplicationController() {
        var self = this;

        // Boot aplication models.
        var categoryModel = new BB.Models.Category();
        var productModel = new BB.Models.Product();

        // Boot category | product views.
        var categoryView = new BB.Views.CategoryView();
        var productView = new BB.Views.ProductView();

        // Boot application controllers.
        BB.Controllers.CategoryController = new BB.Controllers.CategoryController(
            categoryModel,
            categoryView
        );
        BB.Controllers.ProductController = new BB.Controllers.ProductController(
            productModel,
            productView
        );

        this.CategoryController = BB.Controllers.CategoryController;
        this.ProductController = BB.Controllers.ProductController;
        this.Category = categoryModel;
        this.Product = productModel;
    }

    ApplicationController.prototype.bootApplication = function() {
        this.CategoryController.initializeCategories();
        this.ProductController.initializeProducts();
    };

    BB.AppController = new ApplicationController();
    BB.AppController.bootApplication();
})(window.BestestBuy = window.BestestBuy || {});