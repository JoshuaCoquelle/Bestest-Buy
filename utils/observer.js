/*
| -----------------------------------------------------------------
| Observer Class.
| -----------------------------------------------------------------
*/
(function(BB, undefined) {

    /**
     * 
     * 
     * @param {Model} model | The model acting as sender.
     */
    function Observer(model) {
        this.model = model;
        this.callbacks = [];
    }

    /**
     * Attach callback to the Observer.
     * 
     * @param {Function} callback | The callback to run when notified.
     */
    Observer.prototype.attach = function(callback) {
        this.callbacks.push(callback);
    };

    /**
     * Notify each Observer to run all callbacks.
     * 
     * @param {any} args | Arguments to be sent with notification. 
     */
    Observer.prototype.notify = function(args) {
        var i;

        for (i = 0; i < this.callbacks.length; i++) {
            this.callbacks[i](this.model, args);
        }
    };

    BB.Observer = Observer;
})(window.BestestBuy = window.BestestBuy || {});