import { useRoutes } from "react-router-dom"
import { RequireAuth } from "../contexts/Auth/RequireAuth"
import { Home } from "../pages/Home"
import { Private } from "../pages/Private"

export function Routes () {
    let element =  useRoutes([
        {path: '/', element: <Home />},
        {path: '/private', element:<RequireAuth><Private /></RequireAuth>}
    ])
    return element
}