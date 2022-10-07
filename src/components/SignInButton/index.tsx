import { useState } from 'react'
import * as C from './style'
import Modal from 'react-modal'
import { Modals } from '../Modals';

Modal.setAppElement('#root');

export const Button = () => {
    

    const [modalIsOpen,setIsOpen] = useState(false)
    
    function OpenModal () {
        setIsOpen(true)
    }

    function CloseModal () {
        setIsOpen(false)
    }

    return (
        <C.Container>
        <C.Button onClick={OpenModal}>
            <p>Sign in</p>
        
        </C.Button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={CloseModal}
        className='modal-content'
        overlayClassName='overlay-content'
       >
           <Modals/>
        </Modal>
        
        </C.Container>
    )
}