/*
| -----------------------------------------------------------------
| Event Emitter
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    /**
     * Ajax Constructor
     * 
     * @param {Object} props | XHR object for AJAX setup : url/method/callback keys
     */
    function AJAX(props, parseJSON) {
        var ajax = new XMLHttpRequest();

        ajax.onload = function() {
            if (parseJSON) {
                props.callback(JSON.parse(ajax.responseText));
            } else {
                props.callback(ajax.responseText);
            }
        };

        ajax.open(props.method, props.url, true);
        ajax.send();
    }

    /**
     * Expose XHR Constructor
     */
    BB.AJAX = AJAX;
})(window.BestestBuy = window.BestestBuy || {});