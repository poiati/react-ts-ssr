import React from "react"
import ClientOnlyAsyncFetch from "../containers/ClientOnlyAsyncFetch"
import { FetchData } from "../store"

export interface Props {
    text: string,
    fetchData: () => Promise<void>
}

export default class AsyncFetch extends React.Component<Props> {
    public componentDidMount() {
        const { fetchData, text } = this.props

        if (!text) {
            fetchData()
        }
    }

    public render() {
        const { text } = this.props
        return (
            <>
                <p>
                    <i>{text}</i>
                </p>
                <p>
                    <ClientOnlyAsyncFetch loadingText="Carregando..." />
                </p>
            </>
        )
    }
}
