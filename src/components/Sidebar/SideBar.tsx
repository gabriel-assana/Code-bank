import '../../styles/sidebar/sidebar.css';

import { useState } from 'react';
import Modal from 'react-modal';

import { ButtonAction } from './ButtonAction';


Modal.setAppElement('#root')

export function SiderBar(){

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


    function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  
    }
  
    function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
    }

    return(

        <div className="sidebar">
            <ButtonAction title="Depositar" onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
            <ButtonAction title="Sacar" onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
            <ButtonAction title="Transferir" onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
            <ButtonAction title="Extrato" onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
            <Modal 
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>das</h2>
            </Modal>
        </div>

    )
}

 