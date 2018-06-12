import path from "path"
import webpack from "webpack"

const config: webpack.Configuration = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: "./index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static",
    },

    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
}

export default config