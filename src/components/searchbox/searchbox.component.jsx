import React from 'react';
import './searchbox.styles.css';

export const Searchbox =({handleChange, placeholder })=>{
    return(
    <input
    className='search'
    type="search"
     placeholder={placeholder} 
     onChange={handleChange}>         
     </input>
    )}

