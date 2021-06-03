module.exports = {
    hooks: {
        "init": function() {
            console.log('000000')
        },
        config: function (config) {
            config.styles = config.styles || config.pluginsConfig["theme-default"].styles;
            console.log('121111')

            return config;
        },
    },
};


console.log('21212')