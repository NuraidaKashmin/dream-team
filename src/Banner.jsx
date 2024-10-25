import bannerImage from './assets/banner-main.png'
import background from './assets/bg-shadow.png'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className=' rounded-xl mt-10 p-16 bg-gray-950'>
            <div className='grid gap-8  justify-items-center text-center '>
                <img src={bannerImage} alt="banner" />
                <h1 className='text-5xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h2 className='text-white text-2xl'>Beyond Boundaries Beyond Limits</h2>
                <div className='border-2 border-yellow-300 p-2 rounded-xl'>
                <button className='btn bg-yellow-300 font-bold'>Claim Free Credit</button>
                </div>
            </div>
        </div>
        
            );
};

            export default Banner;