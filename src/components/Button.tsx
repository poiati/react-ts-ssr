import React from "react"
import styled from "styled-components"

interface Props {
    text: string
}

interface State {
    clicked: boolean
}

type StyledButtonProps = State

const StyledButton = styled<StyledButtonProps, any>("button")`
    border: 0;
    background-color: ${(props) => props.clicked ? "seagreen" : "palevioletred"};
    color: white;
    padding: 0.5em 1em;
    cursor: pointer;
`

export default class Button extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            clicked: false,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    public handleClick() {
        this.setState((prevState) => {
            return { clicked: !prevState.clicked }
        })
    }

    public render() {
        const { text } = this.props
        return (
            <StyledButton onClick={this.handleClick} {...this.state}>
                {text}
            </StyledButton>
        )
    }
}
