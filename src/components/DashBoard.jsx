import '../styles/dashboard.css';

import React from 'react';

import BigCard from './BigCard';
import Card from './Card';



function DashBoard(){

    return(
            <div className="dashboard">
                <Card className="card-1"/> 
                <Card className="card-2"/>
                <BigCard className="card-3"/> 
            </div>
    )
}

export default DashBoard