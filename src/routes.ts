import Foo from "./components/Foo"
import Home from "./components/Home"
import AsyncFetch from "./containers/AsyncFetch"
import { Dispatch, FetchData, fetchText } from "./store"

interface Route {
    component: any
    exact?: boolean
    fetchData: FetchData
    path: string
}

const routes: Route[] = [
    {
        component: Home,
        exact: true,
        fetchData: (dispatch) => Promise.resolve(),
        path: "/",
    },
    {
        component: Foo,
        fetchData: (dispatch) => Promise.resolve(),
        path: "/foo",
    },
    {
        component: AsyncFetch,
        fetchData: async (dispatch) => {
            await dispatch(fetchText())
        },
        path: "/async",
    },
]

export default routes
