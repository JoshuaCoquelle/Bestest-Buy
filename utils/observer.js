(function(BB, undefined) {

    function Observer(model) {
        this.model = model;
        this.callbacks = [];
    }

    Observer.prototype.attach = function(callback) {
        this.callbacks.push(callback);
    };

    Observer.prototype.notify = function(args) {
        var i;

        for (i = 0; i < this.callbacks.length; i++) {
            this.callbacks[i](this.model, args);
        }
    };

    BB.Observer = Observer;
})(window.BestestBuy = window.BestestBuy || {});