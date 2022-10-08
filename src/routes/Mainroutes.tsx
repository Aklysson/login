import { useRoutes } from "react-router-dom"
import { RequireAuth } from "../contexts/Auth/RequireAuth"
import { Content } from "../pages/Content"
import { Home } from "../pages/Home"
import { Private } from "../pages/Private"

export function Routes () {
    let element =  useRoutes([
        {path: '/', element: <Home />},
        {path: '/content', element:<RequireAuth><Content /></RequireAuth>}
    ])
    return element
}