import '../../styles/sidebar/sidebar.css';

import logo from '../../assets/Logo-Code-Bank.svg';
import { ButtonAction } from './ButtonAction';

export function SiderBar(){

    return(

        <div className="sidebar">
            
            <img className="logo" src={logo} alt="Code Bank" />
            
            <ButtonAction transactionType="Depositar" />
            <ButtonAction transactionType="Pagamentos" />
            <ButtonAction transactionType="Transferir"/>

        </div>

    )
}

 