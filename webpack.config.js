module.exports = {
    entry: "./source/home.js",
    output: {
        filename: "build.js"
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
            }
        ]
    }
}