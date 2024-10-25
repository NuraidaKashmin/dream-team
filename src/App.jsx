
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

  const [coin, setCoin]= useState(0)
    const handleCoins = () => setCoin((p) => p + 16000000000000);
  

  return (
    <>
      <div className='container mx-auto px-4'>
        <Header coin = {coin}></Header>
        <Banner handleCoins ={handleCoins}></Banner>
        <AllPlayers handleIsActiveState ={handleIsActiveState} isActiveProp={isActive}></AllPlayers>
      </div>
      

    </>
  )
}

export default App
