/*
| -----------------------------------------------------------------
| Category View
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * Category View Constructor.
     */
    function CategoryView() {
        this.categoryList = document.getElementById('categories-list');
        this.currentCategory = new BB.Observer(this);
        this.newCategorySelected = new BB.Observer(this);

        this.bindEvents();
    }

    /**
     * Compile and render the categories template with category data.
     * 
     * @param {Category<Array>} categories | An array of categories.
     */
    CategoryView.prototype.appendAllCategories = function(categories) {
        var self = this;
        var categoryList = BB.DOM.CATEGORY_LIST;

        categories.forEach(function(category) {
            var categoryEl = BB.Template.compile(BB.DOM.CATEGORY_LIST_ITEM, category);
            categoryList.insertAdjacentHTML('beforeend', categoryEl);
        });
    };

    /**
     * Bind all event handlers to category UI elements.
     */
    CategoryView.prototype.bindEvents = function() {
        var self = this;
        var categoryList = this.categoryList;

        categoryList.addEventListener('click', function(e) {
            var target = e.target;
            var categoryId = (target.nodeName === 'LI') ? target.dataset.id : target.parentNode.dataset.id

            self.newCategorySelected.notify(categoryId);
        });
    };

    /**
     * Expose CategoryView Constructor
     */
    BB.Views.CategoryView = CategoryView;
})(window.BestestBuy = window.BestestBuy || {});