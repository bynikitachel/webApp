module.exports = {
    mode: 'production',
    entry: "./src/scripts/home.js",
    output: {
        filename: "build.js"
    },
    experiments: {
        executeModule: true,
        outputModule: true,
        syncWebAssembly: true,
        topLevelAwait: true,
        asyncWebAssembly: true,
        layers: true,
        // lazyCompilation: true,
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