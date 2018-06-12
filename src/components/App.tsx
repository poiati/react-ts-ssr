import React from "react"
import { Route, Switch } from "react-router"
import { Link } from "react-router-dom"

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
                <h1 onClick={this.handleClick} style={{ color: this.state.color }} >React TS SSR</h1>
                <div>
                    <h2>Routes</h2>
                    <ul>
                        <li><Link to="/">/</Link></li>
                        <li><Link to="/foo">/foo</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Content</h2>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <p>This is the main content.</p>
                            )}>
                        </Route>

                        <Route
                            exact
                            path="/foo"
                            render={() => (
                                <p>You are now at /foo.</p>
                            )}>
                        </Route>
                    </Switch>
                </div>
            </>
        )
    }
}

export default App
