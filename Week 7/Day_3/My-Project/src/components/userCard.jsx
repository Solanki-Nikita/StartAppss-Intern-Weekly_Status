import React from 'react'
import "./userCard.css";
//import LoveCandy from '../assets/LoveCandy.jpeg';


const userCard = (props) => {
  return (
    <div className='user-Container' style={props.style}>
        <p id='user-name' >{props.name} </p>
        <img id ='user-img' src={props.image} alt={props.name}></img>
        <p id="user-desc">{props.desc}</p>
    </div>
  ) 
}

export default userCard