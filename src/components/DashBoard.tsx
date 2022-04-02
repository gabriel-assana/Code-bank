import '../styles/dashboard.css';

import { BigCard } from './BigCard';
import { Card } from './Card';
import { SiderBar } from './Sidebar/SideBar';

export function DashBoard(){

    return(
            <div className="dashboard">
                <div className="sidebar">
                  <SiderBar/>
                </div>
                <div className="card1">
                  <Card /> 
                  <Card />
                </div>
                <div className="card2">
                <BigCard />  
                </div>
            </div>
    )
}

