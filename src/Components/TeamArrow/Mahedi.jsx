import { useEffect, useState } from 'react';
import { FaStopwatch, FaTimes } from 'react-icons/fa';
import { GiCardKingClubs } from 'react-icons/gi';
// import img1 from '../../assets/imgs/img2.jpg'
// import img2 from '../../assets/imgs/img3.jpg'
// import img3 from '../../assets/imgs/img4.jpg'

import axios from 'axios';
import useProducts from '../../Hooks/Fantastic/useProducts';
// import CardsOfProducts from '../fantasticprople/CardsOfProducts/CardsOfProducts';
import useUserProfile from '../../Hooks/user/userProfile';
import CardsOfProducts from '../fantasticprople/cardsOfProducts/CardsOfProducts';
/**
 * 
 * author:Mahedi Hassan
 * Date:15/8/2023
 * Description:This par is for flash sell 
 * 
 * 
 */

const Mahedi = () => {
    const [products, setProducts] = useState(null);
    const id = "mmm"
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/user/products`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',

                    }
                });
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            };
        };
        fetchUserProfileData()
    }, [id]);
    // console.log(products?.result);
    return (
        <div>

            <div className=" w-full md:bg-white md:shadow-md py-10    ">
                {/* ------- */}
                {/* this part for for the title  */}
                <div className="-mt-5">
                    <h3 className="text-3xl font-semibold py-2 pl-2 flex items-center gap-5">Flash Sell <FaStopwatch />  </h3>
                </div>
                {/* ------- */}




                {/* this is the  flesh sell card section ends */}
                <section className="">
                    {/* main grid container */}
                    <div className=" grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
                        {
                            products?.result?.slice(0, 5)?.map(allcategory => <CardsOfProducts singleProduct={allcategory} />)
                        }
                    </div>

                </section>
                {/* this is the  flesh sell card section ends */}

            </div>

        </div>
    );
};

export default Mahedi;