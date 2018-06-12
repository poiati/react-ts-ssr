import path from "path"
import webpack from "webpack"

const config: webpack.Configuration = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.tsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/static",
    },

    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader" },
        ],
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
}

export default config
