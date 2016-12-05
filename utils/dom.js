/*
| -----------------------------------------------------------------
| DOM Element/Selector Constants
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    var domConstants = {
        // Category list selector (ul).
        CATEGORY_LIST: document.getElementById('categories-list'),

        // Category left navigation list item title.
        CATEGORY_LIST_ITEM: ''
        + '<li data-id="{: id :}" class="list-group-item">'
        +     '<h4>{: name :}</h4>'
        + '</li>',

        // Product list selector (ul).
        PRODUCT_LIST: document.getElementById('products-list'),

        // Product detail modal selector.
        PRODUCT_DETAIL_MODAL: document.getElementById('modal'),

        // Product main container list item image.
        PRODUCT_LIST_ITEM: ''
        + '<li class="col-md-4" '
        +     'data-product-name="{: name :}" '
        +     'data-product-description="{: shortDescription :}" '
        +     'data-high-res-img="{: highResImage :}" '
        +     'style="list-style: none"'
        +'>'
        +     '<img src={: thumbnailImage :} />'
        + '</li>',

        PRODUCT_DETAIL_MODAL_TEMPLATE: ''
        + '<div>'
        +     '<img src={: highResImg :} class="img-responsive"/> '
        +     '<h4>{: productName :}</h4> '
        +     '<hr>'
        +     '<p>{: productDescription :}</p>'
        + '</div>'
    };

    BB.DOM = domConstants;
}(window.BestestBuy = window.BestestBuy || {}));