import { connect, MapDispatchToProps, MapStateToProps } from "react-redux"
import AsyncFetch, { Props as ComponentProps } from "../components/ClientOnlyAsyncFetch"
import { Dispatch, fetchDelayedText, State, ThunkAction } from "../store"

const mapStateToProps: MapStateToProps<Partial<ComponentProps>, {}, State> = (state) => {
    return {
        text: state.delayedText,
    }
}

const mapDispatchToProps: MapDispatchToProps<Partial<ComponentProps>, {}> = (dispatch, ownProps) => {
    return {
        onLoad: () => (dispatch as Dispatch)(fetchDelayedText()),
    }
}

export default connect<Partial<ComponentProps>, Partial<ComponentProps>, Partial<ComponentProps>, State>(
    mapStateToProps,
    mapDispatchToProps,
)(AsyncFetch)
