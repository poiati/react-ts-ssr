import path from "path"
import webpack from "webpack"

const config: webpack.Configuration = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.tsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist", "browser"),
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

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
}

export default config
