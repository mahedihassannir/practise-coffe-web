import { FaCompressArrowsAlt, FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt, FaTiktok, FaYoutube } from 'react-icons/fa';
import ChatBot from './ChatBot/ChatBot';
import { Link } from 'react-router-dom';

const Footer = () => {

    const handleTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }

    return (
        <div className='h-full relative '>
            <div className='grid px-10 w-full  mx-auto gap-10 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-900'>

                <div className=' space-y-6'>
                    <h2 className='text-orange-500 font-bold text-lg mb-8'>SUPPORT</h2>
                    <div className=' lg:w-60 w-full flex justify-center gap-2 px-5  h-16 text-white bg-gray-900 items-center  border rounded-full hover:bg-orange-600'>
                        <p className=''> <FaPhoneAlt className='w-8 h-8 hover:text-green-400'></FaPhoneAlt> </p>
                        <p className='h-10 mt-3 mx-1  my-auto w-0.5 bg-white py-2 text-white opacity-100'> </p>
                        <p className='text-lg font-semibold'> 01844554302 </p>
                    </div>

                    <Link to={"https://maps.app.goo.gl/dL1TTWcReXv258E67"} className='lg:w-60 w-full flex gap-2 px-5 justify-center h-16 text-white items-center border rounded-full bg-gray-900 hover:bg-orange-600'>
                        <p className=''> <FaLocationArrow className='w-8 h-8 hover:text-blue-600'></FaLocationArrow> </p>
                        <p className='h-10 my-auto mt-3 mx-1 w-0.5 bg-white py-2 text-white opacity-100'> </p>
                        <div className='font-semibold'>
                            <p className='text-md'> Store Locator </p>
                            <p className='text-lg'> Find Our Stores </p>
                        </div>
                    </Link>


                    <ul className='text-white flex lg:w-60 md:w-60 w-full justify-around gap-2'>
                        <li className='text-base-200 bg-gray-300 hover:bg-gray-100 rounded w-10 h-10'><FaFacebook className='w-10 h-10 text-blue-700 p-1'></FaFacebook></li>
                        <li className='text-base-200 bg-gray-300 hover:bg-gray-100 rounded w-10 h-10'><FaInstagram className='w-10 h-10 text-red-500 p-1'></FaInstagram></li>
                        <Link to={"https://www.youtube.com/"} className='text-base-200 bg-gray-300 hover:bg-gray-100 rounded w-10 h-10'><FaYoutube className='w-10 h-10 text-red-700 p-1'></FaYoutube></Link>
                        <li className='text-base-200 bg-gray-300 hover:bg-gray-100 rounded w-10 h-10'><FaTiktok className='w-10 h-10 text-black p-1'></FaTiktok></li>
                        <li className='text-base-200 bg-gray-300 hover:bg-gray-100 rounded w-10 h-10'><FaLinkedin className='w-10 h-10 text-blue-800'></FaLinkedin></li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h2 className=' text-orange-500 font-bold text-lg'>ABOUT US</h2>
                    <ul className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 text-white space-y-3'>
                        <Link to={"/about"}>
                            <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>About Us</li>
                        </Link>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Order Tracking</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Shop Address</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Careers</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Delivery Device</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Used Device</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Blog</li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h2 className='text-orange-500 font-bold text-lg'>HELP</h2>
                    <ul className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 text-white space-y-3'>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>EM Policy</li>
                        <Link to={"/privacy_policy"}>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>privacy policy</li>
                        </Link>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Refund Policy</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Warranty Policy</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>how to Exchange <br /> Any Device</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>AGL Reward card</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Complain/Advice</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Join Our Community         </li>
                    </ul>
                </div>

                <div className='space-y-5'>
                    <h2 className='text-orange-500 font-bold text-lg'>STAY CONNECTED</h2>
                    <ul className=' text-white space-y-3'>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Level 6,Block B,Shop 8,<br /> Bashundara City Shopping Complex</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Level4,Zone A (West Court),Shop 28D, <br />Jamuna Future Park</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Level 4,Shop 509, <br /> Police Plaza Concord</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Level4,Shop505, <br /> Mascot Plaza-Uttara</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Delivery Device</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Used Device</li>
                        <li className='hover:text-gray-200 text-lg font-semibold hover:underline'>Blog</li>
                    </ul>
                </div>
            </div>
            <div className=' md:w-60 lg:w-60 w-56 absolute md:bottom-20 lg:bottom-20 bottom-24 md:right-5 lg:right-5 right-0 space-y-4 '>
                <div className='space-y-3'>
                    <p className='md:ml-48 lg:ml-48 ml-40'><ChatBot></ChatBot></p>

                    <button onClick={handleTop} className='btn'>go top</button>
                </div>
            </div>

            <div className='bg-black  text-base-200 font-bold hover:text-red-600 text-center text-lg py-5 '>
                <p> &copy; 2023 Thanks From AppleGadgets <pre className='inline'>Tm</pre> Ltd. All rights reserved </p>
            </div>
        </div>
    );
};

export default Footer;