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

        // Product main container list item image.
        PRODUCT_LIST_ITEM: ''
        + '<li class="col-md-4"'
        +     'data-product-name="{: name :}"'
        +     'data-product-description="{: shortDescription :}"'
        +     'data-high-res-img="{: highResImage :}"'
        +     'style="list-style: none"'
        +'>'
        +     '<img src={: thumbnailImage :} />'
        + '</li>',

        // Product modal template.
        PRODUCT_ITEM_DETAIL: ''
        + '<div>'
        +     '<img src={: highResImage :} />'
        +     '<p>{: name :}</p>'
        +     '<p>{: shortDescription :}</p>'
        + '</div>'
    };

    BB.DOM = domConstants;
}(window.BestestBuy = window.BestestBuy || {}));