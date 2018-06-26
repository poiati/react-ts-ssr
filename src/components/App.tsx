import React from "react"
import { Route, Switch } from "react-router"
import routes from "../routes"
import Nav from "./Nav"

import AsyncFetch from "../containers/AsyncFetch"

interface AppProps {}

interface AppState {
    color: string
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: never) {
        super(props)
        this.state = {
            color: "blue",
        }
        this.handleClick = this.handleClick.bind(this)
    }

    public handleClick() {
        this.setState({ color: "red" })
    }

    public render() {
        return (
            <>
                <h1 onClick={this.handleClick} style={{ color: this.state.color }}>React TS SSR</h1>

                <div>
                    <Nav />
                    <h2>Content</h2>
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                render={() => {
                                    const Comp = route.component
                                    return <Comp fetchData={route.fetchData} />
                                }}
                            />
                        ))}
                    </Switch>
                </div>
            </>
        )
    }
}

export default App
