'use strict';

var _ = require('lodash');

function helper(paper) {
    paper.handlebars.registerHelper('snippet', function (name, options) {
        var snippets = paper.snippets[name] || [];
        var content = '';

        if (_.isArray(snippets)) {
            _.each(snippets, function (snippet) {
                var c = snippet.render(this, { data: options.hash });
                content += '<div  data-snippet-id="' + snippet.id + '" data-snippet-name="' + snippet.blockName + '">\n' + c + '\n</div>';
            })
        }

        return '<div data-snippet="' + name + '">\n' + content + '\n</div>';
    });
}

module.exports = helper;
