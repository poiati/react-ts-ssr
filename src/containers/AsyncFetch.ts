import { connect, MapDispatchToProps, MapStateToProps } from "react-redux"
import AsyncFetch, { Props as ComponentProps } from "../components/AsyncFetch"
import { Dispatch, State } from "../store"

interface StateProps {
    text: string,
    fetchData: (dispatch: Dispatch) => Promise<void>
}

interface DispatchProps {
    fetchData: (dispatch: Dispatch) => Promise<void>
}

const mapStateToProps: MapStateToProps<Partial<ComponentProps>, StateProps, State> = (state) => {
    return {
        text: state.text,
    }
}

const mapDispatchToProps: MapDispatchToProps<Partial<ComponentProps>, DispatchProps> = (dispatch, ownProps) => {
    return {
        fetchData: () => ownProps.fetchData(dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AsyncFetch)
