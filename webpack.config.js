module.exports = {
    entry: "",
    output: {
        filename: 'bundle.js',
        path: './'
    },
    mode: 'none',
    module: {
        rules:[
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader','css-loader'
                ]

            }

        ]
    }
}