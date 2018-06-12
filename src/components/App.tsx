import React from "react"

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
            <h1 onClick={this.handleClick} style={{ color: this.state.color }} >Hi There, SSR OMG!</h1>
        )
    }
}

export default App
