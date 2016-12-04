(function(GB, undefined) {
    var templateParser = {
        curlyRegex: /\{\:([^}]+)?\:\}/g,

        compile: function(template, dataObj) {
            return template.replace(this.curlyRegex, function(extracted, key) {
                return dataObj[key.trim()];
            });
        }
    };

    GB.Template = templateParser;
})(window.GreatBuy = window.GreatBuy || {});