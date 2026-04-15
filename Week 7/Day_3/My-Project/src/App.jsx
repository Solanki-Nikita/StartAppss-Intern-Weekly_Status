import React from 'react'
import UserCard from './components/userCard.jsx';
import LoveCandy from './assets/LoveCandy.jpeg';
import Mango from './assets/mango.jpg';
import Orange from './assets/orange.jpg';
import'./App.css';

export default function App() {
  return (
    <div className='container'>
      {/* <h1>Hello Buddy</h1> */}
      <UserCard name="LoveCandy" desc="desc1" image={LoveCandy} style={{"border-radius":"10px"}}/>
      <UserCard name="MangoFruit" desc="desc2" image={Mango} style={{"border-radius":"10px"}}/> 
      <UserCard name="OrangeFruit" desc="desc3" image={Orange} style={{"border-radius":"10px"}}/>
    
    </div>
  )
}
