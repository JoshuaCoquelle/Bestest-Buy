/*
| -----------------------------------------------------------------
| Template Parser/Compiler utility
| -----------------------------------------------------------------
*/
(function(BB, undefined) {
    var templateParser = {
        templateRegex: /\{\:([^}]+)?\:\}/g,

        /**
         * Compile the template with the objects data.
         * 
         * @param {String} template | The template string wanting to be compiled.
         * @param {Object} dataObj  | The desired category or product object to insert into template.
         */
        compile: function(template, dataObj) {
            return template.replace(this.templateRegex, function(extracted, key) {
                return dataObj[key.trim()];
            });
        }
    };

    BB.Template = templateParser;
})(window.BestestBuy = window.BestestBuy || {});