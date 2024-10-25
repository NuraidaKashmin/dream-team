import './AllPlayers.css'


const Button = ({handleIsActiveState, isActiveProp, selectedPlayerProp}) => {
    return (
        <div>
            <div className="flex justify-between">
                <div className='flex gap-2'>
                <h1 className='font-bold text-3xl'>{ isActiveProp === 'available' ? 'Available Players' : `Selected Players (${selectedPlayerProp.length}/6)` }</h1>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => handleIsActiveState("available")} className={isActiveProp === 'available' ? 'btn active' : 'btn'}>Available</button>
                    <button onClick={() => handleIsActiveState("selected")} className={isActiveProp === 'selected' ? 'btn active' : 'btn'}>Selected (<span>{selectedPlayerProp.length}</span>)</button>
                </div>
            </div>
        </div>
    );
};

export default Button;