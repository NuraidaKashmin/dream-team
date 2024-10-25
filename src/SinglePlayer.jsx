
const SinglePlayer = ({ player }) => {
    const { playerId, name, country, image, role, battingType, bowlingType, biddingPrice } = player

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <figure>
                        <img
                            src={image}
                            alt="player image" />
                    </figure>
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className="flex justify-evenly gap-10 items-center">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                            <p className="text-gray-500">{country}</p>
                        </div>
                        <p className="p-2 bg-gray-300 rounded-xl text-center">{role}</p>
                    </div>
                    <hr />
                    <p className="font-bold">Ratting</p>
                    <div className="flex justify-around font-bold">
                        <p>Batting Type:</p>
                        <p className="text-right text-gray-500">{battingType}</p>
                    </div>
                    <div className="flex justify-around font-bold">
                        <p>Bowling Type:</p>
                        <p className="text-right text-gray-500">{bowlingType}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Price: ${biddingPrice}</p>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePlayer;