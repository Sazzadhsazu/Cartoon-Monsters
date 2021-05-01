import React from 'react';
import {CARD} from '../card/card.component';
import './card-list.styles.css';



export const CardList = props =>{
    return(
    <div className='card-list'> 
    {props.monsters.map(monster =>(
        <CARD key={monster.id} monster={monster}/>
        
            // <h1  key={monster.id}> {monster.name}</h1> 
    ))}
    
    </div>)

};