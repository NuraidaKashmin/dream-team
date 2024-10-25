import React from 'react';
import footerLogo from './assets/logo-footer.png'
import background from './assets/bg-shadow.png'

const footer = () => {
    return (
        <div>

            <div className=''>





                <footer className=" bg-[#06091A] text-white  pt-48 pl-6 pr-6 pb-6 relative">

                    <div className='grid justify-center mb-10'>
                        <img src={footerLogo} alt="footer logo" />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-evenly gap-10 mb-4'>
                        <nav>
                            <h6 className="footer-title">About Us</h6>
                            <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Quick Links</h6>
                            <a className="link link-hover">Home</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Services</a>
                        </nav>
                        <form>
                            <h6 className="footer-title">Subscribe</h6>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text text-gray-500">Subscribe to our newsletter for the latest updates.</span>
                                </label>
                                <div className="join">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input input-bordered join-item" />
                                    <button className="btn btn-primary join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <hr />
                    <aside className='text-center pt-2'>
                        <p>Copyright © {new Date().getFullYear()} - Your Company All Rights </p>
                    </aside>
                    <div style={{ backgroundImage: `url(${background}`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='text-center grid justify-center gap-6 p-10 w-3/4 mx-auto rounded-xl absolute -top-36 left-44 text-black bg-gray-50 items-center'>
                        <h1 className='text-5xl font-bold'>Subscribe to our Newsletter</h1>
                        <p className='text-xl'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex gap-2 justify-center'>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <button className='btn bg-gradient-to-r from-red-400 to-yellow-500'>Subscribe</button>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default footer;