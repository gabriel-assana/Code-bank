import '../../styles/global.css';
import '../../styles/sidebar/buttonAction.css';

import { useState } from 'react';
import Modal from 'react-modal';

import pix from '../../assets/pix.svg';
import { FormDeposit } from '../Forms/FormDeposit';
import { FormPayments } from '../Forms/FormPayments';
import { FormTransfers } from '../Forms/FormTransfers';

Modal.setAppElement('#root')

interface ButtonActionProps { 
  transactionType: string,
}

export function ButtonAction ({transactionType}:ButtonActionProps) {

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
            <img className="pix" src={pix} alt={transactionType}/>
            <span className="btn-title">{transactionType}</span>    

            <Modal 
               isOpen={isNewTransactionModalOpen}
               onRequestClose={handleCloseNewTransactionModal}
               overlayClassName="react-modal-overlay"
               className="react-modal-content" 
            >

              {  
                transactionType === "Depositar" ? <FormDeposit onRequestClose={handleCloseNewTransactionModal}/> :  
                transactionType === "Pagamentos" ? <FormPayments onRequestClose={handleCloseNewTransactionModal}/> : 
                transactionType === "Transferir" ? <FormTransfers  onRequestClose={handleCloseNewTransactionModal} /> : null
              }              

            </Modal>
        </div>
    </>   
    
    )

}