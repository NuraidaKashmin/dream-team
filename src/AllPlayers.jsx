import { useEffect, useState } from 'react';
import './AllPlayers.css'
import SinglePlayer from './SinglePlayer';


const AllPlayers = ({ handleIsActiveState, isActiveProp }) => {
    const [players, setPlayers] = useState([])


    useEffect(() => {
        fetch("../public/fakedata.json")
            .then(res => res.json())
            .then(data => {
                setPlayers(data)
            })
    }, [])




    return (
        <div>
            <div className="flex justify-between">
                <h1 className='font-bold text-3xl'>Available Players</h1>
                <div className="flex gap-2">
                    <button onClick={() => handleIsActiveState("available")} className={isActiveProp === 'available' ? 'btn active' : 'btn'}>Available</button>
                    <button onClick={() => handleIsActiveState("selected")} className={isActiveProp === 'selected' ? 'btn active' : 'btn'}>Selected (<span>0</span>)</button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center'>
                {
                    players.map((p) => <SinglePlayer key={p.id} player={p}></SinglePlayer>)
                }
            </div>
        </div>

    );
};

export default AllPlayers;