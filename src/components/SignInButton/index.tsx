import { useState,useContext } from 'react'
import * as C from './style'
import Modal from 'react-modal'
import { AuthContext } from '../../contexts/Auth/AuthContext';

Modal.setAppElement('#root');

export const Button = () => {
    

    const [modalIsOpen,setIsOpen] = useState(false)
    
    function OpenModal () {
        setIsOpen(true)
        
    }

    function CloseModal () {
        setIsOpen(false)
    }

    const login = useContext(AuthContext)

    
    const loginz = async() =>{
        if(email && password){
        const user = await login.signin('','')
        CloseModal();
      return user;
        } else {
            alert('Preencha todas as informaçoes!')
        }
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
       <>
       {!login.user && 
        <C.Container>
        <C.Button onClick={OpenModal}>
            <p>Sign in</p>
        
        </C.Button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={CloseModal}
        className="modal"

       >

        
       <h3>Log in</h3>
       <input type="text"
       value={email}
        placeholder='Email address'
        onChange={(e)=>setEmail(e.target.value)} 
        />
       <input type="password"
        placeholder='Password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
       <button onClick={()=>loginz()}>Log in</button>

        </Modal>
        
        </C.Container>
} {
    login.user && 
    <C.Container>
        <C.Button onClick={login.signout}>Sing out</C.Button>
    </C.Container>

    
}
        </>
    )
}