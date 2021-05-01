import React from 'react';
import './card.styles.css';

export const CARD =props=>{
      return(
     <div className='card-contaioner'>
         <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}>
         </img>
        <h2>{props.monster.name}</h2> 
        <p>{props.monster.email}</p>
        </div>
      )
}