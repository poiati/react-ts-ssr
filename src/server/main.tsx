import express from "express"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import webpack from "webpack"
import webPackDevMiddleware from "webpack-dev-middleware"

import webpackConfig from "../../webpack.config"
import App from "../components/App"

const compiler = webpack(webpackConfig)

const port = process.env.port || 9090
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(webPackDevMiddleware(compiler, {
    publicPath: "/static",
}))

app.all("*", (req, res) => {
    const staticApp = ReactDOMServer.renderToString(
        <App />,
    )
    res.render("index", { app: staticApp })
})

app.listen(9090, () => {
    console.log(`server listening at ${port}`)
})
