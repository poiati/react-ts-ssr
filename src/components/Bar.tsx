import React from "react"

interface Props {
    text: string
}

export default class Bar extends React.Component<Props> {
    public render() {
        const { text } = this.props
        return <p>{text}</p>
    }
}
