(function(BB, undefined) {
    var templateParser = {
        templateRegex: /\{\:([^}]+)?\:\}/g,

        compile: function(template, dataObj) {
            return template.replace(this.templateRegex, function(extracted, key) {
                return dataObj[key.trim()];
            });
        }
    };

    BB.Template = templateParser;
})(window.BestestBuy = window.BestestBuy || {});