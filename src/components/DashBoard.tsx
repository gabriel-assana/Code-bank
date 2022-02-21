import '../styles/dashboard.css';

import React from 'react';

import BigCard from './BigCard';
import Card from './Card';
import SiderBar from './SideBar';



export default function DashBoard(){

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

