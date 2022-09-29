import { useContext } from "react"
import { Private } from "../../pages/Private"
import { AuthContext } from "./AuthContext"

export function RequireAuth({children}: {children:JSX.Element}) {
    const auth = useContext(AuthContext)
if(!auth.user){
    return <Private />
}
    else  return children
}