import bannerImage from './assets/banner-main.png'
const Banner = () => {
    return (
        <div className='grid gap-5 justify-center justify-items-center border border-black pt-16 pb-16 rounded-xl mt-10'>
            <img src={bannerImage} alt="banner" />
            <h1 className='text-3xl font-extrabold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h2 className='text-2xl font-bold'>Beyond Boundaries Beyond Limits</h2>
            <div className='border-2 border-yellow-300 p-2 rounded-xl'>
            <button className='btn bg-yellow-300 font-bold'>Claim Free Credit</button>
            </div>
        </div>
        
            );
};

            export default Banner;