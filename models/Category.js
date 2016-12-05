/*
| -----------------------------------------------------------------
| Category Model
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * Category Model Constructor.
     * 
     * Initialize categories array and instantiate needed observers.
     */
    function Category() {
        this.categories = [];
        this.applicationDataHasLoaded = new BB.Observer(this);
        this.categoryHasChanged = new BB.Observer(this);
    }

    /**
     * Get all categories from Best Buy API on page load.
     */
    Category.prototype.getCategoriesOnAppLoad = function() {
        var self = this;

        categories = new BB.AJAX({
            url: 'http://www.bestbuy.ca/api/v2/json/category/Departments',
            method: 'GET',
            callback: function(data) {
                self.categories = self.categories.concat(data.subCategories);
                self.applicationDataHasLoaded.notify(self.categories);
            }
        }, true);
    };

    BB.Models.Category = Category;
})(window.BestestBuy = window.BestestBuy || {});