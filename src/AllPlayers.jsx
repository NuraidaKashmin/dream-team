import './AllPlayers.css'

const AllPlayers = ({handleIsActiveState, isActiveProp}) => {
    
    return (
        <div>
            <div className="flex justify-between">
            <h1>Available Players</h1>
            <div className="flex gap-2">
                <button onClick={() => handleIsActiveState("available")} className={isActiveProp === 'available' ? 'btn active': 'btn'}>Available</button>
                <button onClick={() => handleIsActiveState("selected")} className={isActiveProp === 'selected' ? 'btn active': 'btn'}>Selected (<span>0</span>)</button>
            </div>
            </div>
        </div>
    );
};

export default AllPlayers;