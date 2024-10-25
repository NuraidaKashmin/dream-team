
import { useState } from 'react'
import AllPlayers from './AllPlayers'
import './App.css'
import Banner from './Banner'
import Header from './Header'

function App() {

  const [isActive, setIsActive] = useState("available");

  const handleIsActiveState = (status) => {
    if (status === "available"){
      setIsActive("available")
    }

    else{
      setIsActive("selected")
    }
  }
  

  return (
    <>
      <div className='container mx-auto px-4'>
        <Header></Header>
        <Banner></Banner>
        <AllPlayers handleIsActiveState ={handleIsActiveState} isActiveProp={isActive}></AllPlayers>
      </div>
      

    </>
  )
}

export default App
