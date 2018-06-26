import axios from "axios"
import { Action as ReduxAction, ActionCreator, createStore, Reducer } from "redux"
import { ThunkAction as ReduxThunkAction, ThunkDispatch } from "redux-thunk"

const FETCH_TEXT_DONE = "FETCH_TEXT_DONE"
const FETCH_DELAYED_TEXT_DONE = "FETCH_DELAYED_TEXT_DONE"

const defaultState: State = {
    delayedText: "",
    text: "",
}

export interface Action extends ReduxAction<string> {
    payload?: any
}

export type ThunkAction = ReduxThunkAction<Promise<Action>, State, void, Action>

export type Dispatch = ThunkDispatch<State, void, Action>

export type FetchData = (dispatch: Dispatch) => Promise<void>

export interface State {
    delayedText: string
    text: string
}

export const fetchTextDone: ActionCreator<Action> = (text: string) => {
    return { type: FETCH_TEXT_DONE, payload: { text } }
}

export const fetchDelayedTextDone: ActionCreator<Action> = (delayedText: string) => {
    return { type: FETCH_DELAYED_TEXT_DONE, payload: { delayedText } }
}

const reducer: Reducer<State, Action> = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DELAYED_TEXT_DONE:
            const { delayedText } = action.payload
            return { ...state, delayedText }
        case FETCH_TEXT_DONE:
            const { text } = action.payload
            return { ...state, text }
        default:
            return state
    }
}

export const fetchText: ActionCreator<ThunkAction> = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:9010/api/v1/text")
        return dispatch(fetchTextDone(res.data.text))
    }
}

export const fetchDelayedText: ActionCreator<ThunkAction> = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:9010/api/v1/text/delayed")
        return dispatch(fetchDelayedTextDone(res.data.text))
    }
}

export default reducer
