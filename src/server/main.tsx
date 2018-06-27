import compression from "compression"
import express from "express"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router"
import { match, matchPath } from "react-router-dom"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { ServerStyleSheet } from "styled-components"
import webpack from "webpack"
import webPackDevMiddleware from "webpack-dev-middleware"
import routes from "../routes"
import reducer, { Action, State } from "../store"

import webpackConfig from "../../webpack.config"
import App from "../components/App"

const isProd = process.env.NODE_ENV === "production"

const port = process.env.port || 9090
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

if (!isProd) {
    const compiler = webpack(webpackConfig)
    app.use(webPackDevMiddleware(compiler, {
        publicPath: "/static",
    }))
} else {
    app.use("/static", compression(), express.static(path.join("dist", "browser")))
}

app.all("*", async (req, res) => {
    const context = {}
    let routeMatch: match<{}>

    const store = createStore(
        reducer,
        applyMiddleware(thunk),
    )

    const currRoute = routes.find((route) => {
        const m = matchPath(req.path, route)
        if (m) {
            routeMatch = m
            return true
        }
        return false
    })

    if (currRoute) {
        await currRoute.fetchData(store.dispatch)
    }

    const sheet = new ServerStyleSheet()
    const staticApp = ReactDOMServer.renderToString(
        sheet.collectStyles(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>,
        ),
    )
    const preloadedState = store.getState()
    const styleTags = sheet.getStyleTags()

    res.render(
        "index",
        { preloadedState, staticApp, styleTags, scriptType: isProd ? "production.min" : "development" },
    )
})

app.listen(9090, () => {
    console.log(`server listening at ${port}`)
})
