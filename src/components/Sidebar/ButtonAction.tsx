import '../../styles/global.css';
import '../../styles/sidebar/buttonAction.css';

import { useState } from 'react';
import Modal from 'react-modal';

import close from '../../assets/close.svg';
import pix from '../../assets/pix.svg';
import { FormDeposit } from '../Forms/FormDeposit';
import { FormPayments } from '../Forms/FormPayments';
import { FormTransfers } from '../Forms/FormTransfers';

Modal.setAppElement('#root')

interface ButtonActionProps { 
    title: string,
}

export function ButtonAction ({title}:ButtonActionProps) {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
      
    }

    function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
    }


    return(
     <>
        <div className="buttonAction" onClick={handleOpenNewTransactionModal} >
            <img className="pix" src={pix} alt={title}/>
            <span className="btn-title">{title}</span>    


            <Modal 
               isOpen={isNewTransactionModalOpen}
               onRequestClose={handleCloseNewTransactionModal}
               overlayClassName="react-modal-overlay"
               className="react-modal-content" 
            >
            <button type="button" onClick={handleCloseNewTransactionModal}>  
                <img src={close} alt="Botão de Fechar" />
            </button>

              {  
                title === "Depositar" ? <FormDeposit onRequestClose={handleCloseNewTransactionModal}/> :  
                title === "Pagamentos" ? <FormPayments onRequestClose={handleCloseNewTransactionModal}/> : 
                title === "Transferir" ? <FormTransfers onRequestClose={handleCloseNewTransactionModal} /> : null
              }              

            </Modal>
        </div>
    </>   
    
    )

}