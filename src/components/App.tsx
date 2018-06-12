import React from "react"

interface AppProps {}

interface AppState {
    color: string
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {
            color: "blue"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ color: "red" })
    }

    render() {
        return (
            <h1 onClick={this.handleClick} style={{ color: this.state.color }} >Hi There, SSR OMG!</h1>
        )
    }
}

export default App
