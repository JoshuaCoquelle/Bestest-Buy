(function(BB, undefined) {
    var templateParser = {
        curlyRegex: /\{\:([^}]+)?\:\}/g,

        compile: function(template, dataObj) {
            return template.replace(this.curlyRegex, function(extracted, key) {
                return dataObj[key.trim()];
            });
        }
    };

    BB.Template = templateParser;
})(window.BestestBuy = window.BestestBuy || {});