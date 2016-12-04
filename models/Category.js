/*
| -----------------------------------------------------------------
| Category Model
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * Category Model Constructor
     */
    function Category() {
        this.categories = [];
        this.applicationHasLoaded = new BB.Observer(this);
        this.categoryHasChanged = new BB.Observer(this);
    }

    Category.prototype.getCategoriesOnAppLoad = function() {
        var self = this;

        categories = new BB.AJAX({
            url: 'http://www.bestbuy.ca/api/v2/json/category/Departments',
            method: 'GET',
            callback: function(data) {
                self.categories = self.categories.concat(data.subCategories);
                console.log(self);
            }
        });
    };

    /**
     * Expose Category Constructor
     */
    BB.Models.Category = Category;
})(window.BestestBuy = window.BestestBuy || {});