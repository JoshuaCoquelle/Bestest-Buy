/*
| -----------------------------------------------------------------
| Product View
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * Product View Constructor.
     */
    function CategoryView() {
        this.categoryList = document.getElementById('categories-list');
        this.currentCategory = new BB.Observer(this);
        this.newCategorySelected = new BB.Observer(this);

        this.bindEvents();
    }

    CategoryView.prototype.appendAllCategories = function(categories) {
        var self = this;
        var categoryList = BB.DOM.CATEGORY_LIST;

        categories.forEach(function(category) {
            var categoryEl = BB.Template.compile(BB.DOM.CATEGORY_LIST_ITEM, category);
            categoryList.insertAdjacentHTML('beforeend', categoryEl);
        });
    };

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