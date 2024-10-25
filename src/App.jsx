
import { useState } from 'react'
import AllPlayers from './AllPlayers'
import './App.css'
import Banner from './Banner'
import Header from './Header'
import Button from './Button'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const handleCoins = () => setCoin((p) => p + 16000000);


    const [selectedPlayer, setSelectedPlayer]= useState([])

    const handleSelectedPlayer = (player) => {
    
      const isExist = selectedPlayer.find((p)=> p.playerId === player.playerId);
      if (isExist){
        toast.error("Already selected.", {
        position: "top-center",
        theme: "dark"
      });
      }
      else{
        if (selectedPlayer.length === 6) {
          toast.error("Maximum players selected.", {
            position: "top-center",
            theme: "dark"
          });
        } else {
          
          if (coin <= 0){
            toast.error("Need more coins.", {
              position: "top-center",
              theme: "dark"
            });
          } else{
            const newPlayer = [...selectedPlayer, player];
            setSelectedPlayer(newPlayer)
            setCoin(coin - player.biddingPrice);
          }
        }
      }

    }

    const removeFromSelectedPlayer = (player) => {
    

      // reference - https://stackoverflow.com/a/69458984/26135435

      let obj = selectedPlayer.find(o => o.playerId === player.playerId);

      const index = selectedPlayer.indexOf(obj);
      setSelectedPlayer([
        ...selectedPlayer.slice(0, index),
        ...selectedPlayer.slice(index + 1)
      ]);

      setCoin(coin + player.biddingPrice);

    }

    
  
  
    return (
    

      <div className='container mx-auto px-4'>
        <Header coin = {coin}></Header>
        <Banner handleCoins ={handleCoins}></Banner>
        <Button handleIsActiveState={handleIsActiveState} isActiveProp={isActive} selectedPlayerProp={selectedPlayer}></Button>
        <AllPlayers handleSelectedPlayer={handleSelectedPlayer} handleIsActiveState ={handleIsActiveState} isActiveProp={isActive} selectedPlayerProp={selectedPlayer} removeFromSelectedPlayer={removeFromSelectedPlayer}></AllPlayers>
        <Footer></Footer>
        <ToastContainer />
      </div>
  )
  


}

export default App
