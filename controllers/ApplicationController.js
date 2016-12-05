(function(BB, undefined) {
    function ApplicationController() {
        var self = this;

        // Boot aplication models.
        var productModel = new BB.Models.Product();
        var categoryModel = new BB.Models.Category();

        // Boot category | product views.
        var productView = new BB.Views.ProductView();
        var categoryView = new BB.Views.CategoryView();

        // Boot application controllers.
        BB.Controllers.ProductController = new BB.Controllers.ProductController(
            productModel,
            productView
        );

        BB.Controllers.CategoryController = new BB.Controllers.CategoryController(
            categoryModel,
            categoryView,
            BB.Controllers.ProductController
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

    BB.App = new ApplicationController();
    BB.App.bootApplication();
})(window.BestestBuy = window.BestestBuy || {});