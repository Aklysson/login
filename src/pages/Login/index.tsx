import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Login = () => {
    const auth = useContext(AuthContext)

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const Navigate = useNavigate()

    const login = async() => {
        if(email && password) {
            const logged = await auth.signin(email,password)
            if(logged) {
                Navigate('/')
            }
            else {
                alert("Não foi possivel fazer login")
            }
        }
    }

    return (
        <div>
        <h2>Faça seu login:</h2>
        <input type='text'
         placeholder="Email" 
         value={email}
         onChange={(e)=> {setEmail(e.target.value)}} />

        <input type='password'
         placeholder="Senha" 
         value={password}
         onChange={(e)=> {setPassword(e.target.value)}} />
        <button onClick={login}>Logar</button>
        </div>
    )
}