/*
| -----------------------------------------------------------------
| Product View
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * The ProductView Constructor.
     * 
     * Creates instance with needed DOM selectors and DOM element templates.
     */
    function ProductView() {
        this.productList = BB.DOM.PRODUCT_LIST;
        this.productListItem = BB.DOM.PRODUCT_LIST_ITEM;
        this.productModalEl = BB.DOM.PRODUCT_DETAIL_MODAL;
        this.productModalTemplate = BB.DOM.PRODUCT_DETAIL_MODAL_TEMPLATE;
        this.rerenderProducts = new BB.Observer(this);
        this.modalHasBeenTriggered = new BB.Observer(this);
        this.bindEvents();
    }

    /**
     * Compile element templates with product data and append to products container.
     * @param {Product<Array>} products | An array of products.
     */
    ProductView.prototype.appendAllProducts = function(products) {
        var self = this;

        products.forEach(function(product) {
            var productEl = BB.Template.compile(self.productListItem, product);
            self.productList.insertAdjacentHTML('beforeend', productEl);
        });
    };

    /**
     * Rerender the products list with updated data then recompile templates.
     * @param {Product<Array>} products | An array of products.
     */
    ProductView.prototype.rerenderProductList = function(products) {
        var self = this;
        self.productList.innerHTML = '';

        products.forEach(function(product) {
            var productEl = BB.Template.compile(self.productListItem, product);
            self.productList.insertAdjacentHTML('beforeend', productEl);
        });
    }

    /**
     * Compile the product details modal template and set the current products data in the UI.
     * 
     * @param {Object} productDetails | An object containing the selected product's model details.
     */
    ProductView.prototype.buildDetailsModal = function(productDetails) {
        var self = this;
        var modal = BB.Template.compile(this.productModalTemplate, productDetails);
        this.productModalEl.innerHTML = '';
        this.productModalEl.insertAdjacentHTML('beforeend', modal);

        setTimeout(function() {
            self.productModalEl.classList.remove('hide');
        }, 150)
    };

    /**
     * Bind all event handlers to product UI elements.
     */
    ProductView.prototype.bindEvents = function() {
        var self = this;

        // Get <li> dataset on click.
        self.productList.addEventListener('click', function(e) {
            var target = e.target;
            var productDetails;

            if (target.nodeName === 'LI') {
                productDetails = target.dataset;
            } else if (target.nodeName === 'IMG') {
                productDetails = target.parentNode.dataset;
            }

            self.modalHasBeenTriggered.notify(productDetails);
        });
    };
    
    BB.Views.ProductView = ProductView;
})(window.BestestBuy = window.BestestBuy || {});
