module.exports = {
    mode: 'production',
    entry: "./source/scripts/home.js",
    output: {
        filename: "build.js"
    },
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [{
            test: /\.js/,
            // loader: 'babel',
            exclude: /(node_modules|bower_components)/
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /stylesheet\.js$/i,
            use: ['./a-pitching-loader.js'],
            type: 'asset/source', // we set type to 'asset/source' as the loader will return a string
        },
        ]
    }
}