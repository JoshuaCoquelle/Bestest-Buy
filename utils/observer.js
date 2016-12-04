(function(GB, undefined) {

    function Observer(sender) {
        this.sender = sender;
        this.callbacks = [];
    }

    Observer.prototype.attach = function(callback) {
        this.callbacks.push(callback);
    };

    Observer.prototype.notify = function(args) {
        var i;

        for (i = 0; i < this.callbacks.length; i++) {
            this.callbacks[i](this.sender, args);
        }
    };

    GB.Observer = Observer;
})(window.GreatBuy = window.GreatBuy || {});