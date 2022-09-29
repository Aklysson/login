
import { Link } from 'react-router-dom'
import { Button } from '../SignInButton'
import * as C from './style'

export function Header() {
    return (
        <C.Header>
            <C.Container>
               <C.Nav>
                <h1>React.News</h1>
                <Link to='/'>Home</Link>
                <Link to='/content'>Content</Link>
                </C.Nav>
            < Button />
            </C.Container>
        </C.Header>
    )
}