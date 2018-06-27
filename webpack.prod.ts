import path from "path"
import webpack from "webpack"
import merge from "webpack-merge"
import base from "./webpack.config"

const config: webpack.Configuration = {
    mode: "production",
}

export default merge(base, config)
