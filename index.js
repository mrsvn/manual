module.exports = {
    book: {
        assets: './assets',
        js: [
            'search-engine.js', 'search.js'
        ],
        css: [
            'search.css'
        ]
    },
    hooks: {
        "page:before": function(page) {
            console.log('0999999')
            page.content = "# Title\n" +page.content;
            return page;
        },
        // Index each page
        init: function () {
            console.log('0000')
        },
        // Index each page
        'page': function (page) {
            console.log('111111')
            return page;
        },

        // Write index to disk
        'finish': function () {
            console.log('222')
        }
    }
}