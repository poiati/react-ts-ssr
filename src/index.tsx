import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducer, { Action, State } from "./store"

import App from "./components/App"

const preloadedState = (window as any).__PRELOADED_STATE__

const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk),
)

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("app"),
)
