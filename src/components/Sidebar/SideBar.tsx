import '../../styles/sidebar/sidebar.css';

import { ButtonAction } from './ButtonAction';

export function SiderBar(){

    return(

        <div className="sidebar">
            <ButtonAction title="Depositar" />
            <ButtonAction title="Pagamentos" />
            <ButtonAction title="Transferir"/>
            <ButtonAction title="Extrato" />
        </div>

    )
}

 