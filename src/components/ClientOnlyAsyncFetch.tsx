import React from "react"
import { Action } from "../store"

export interface Props {
    text: string,
    loadingText?: string,
    onLoad: () => Promise<Action>
}

export default class ClientOnlyAsyncFetch extends React.Component<Props, never> {
    public static defaultProps: Partial<Props> = {
        loadingText: "Loading...",
    }

    public componentDidMount() {
        const { onLoad } = this.props
        onLoad()
    }

    public render() {
        const { loadingText, text } = this.props

        return (
            <span>
                Loaded only on Client: <b>{text || loadingText}</b>
            </span>
        )
    }
}
