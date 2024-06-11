// // author:Nabila
// // Date:18/8/2023
// // Description:This par is for 'just for you'

// import { useEffect, useState } from 'react';
// import { FaStar } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import useProducts from '../../Hooks/Fantastic/useProducts';
// import CardsOfProducts from '../fantasticprople/CardsOfProducts/CardsOfProducts';
// import useUserProfile from '../../Hooks/user/userProfile';


// const FlashSale = () => {
//     const [displaycount, SetdisplayCount] = useState(10)
//     const [products, setProducts] = useState(null);
//     const id = "e-com"
//     useEffect(() => {
//         const fetchUserProfileData = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/api/v1/user/products`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',

//                     }
//                 });
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 console.error('Error fetching user products data:', error);
//             };
//         };
//         fetchUserProfileData();
//     }, [id]);
//     console.log(products);
//     {/* <Link to={`/products/${singleProduct._id}`}> */ }

//     const loadMore = (pageSize) => {




//     };
//     return (
//         <div className='lg-11/12 mx-auto   my-20 lg:mx-10'>

//             <h2 className='text-3xl mb-4 font-bold ml-1'>Just For You</h2>


//             <section className="">
//                 {/* main grid container */}
//                 <div className=" grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                     {products?.result?.slice(0, 40)?.map(data => <CardsOfProducts singleProduct={data} />)}
//                 </div>

//             </section>
//             {/* this is the  flesh sell card section ends */}
//             <div className='mx-auto text-center mb-12 mt-6'>
//                 <button className='py-3 px-32 rounded-lg bg-[#FC9E66] text-white font-bold text-lg text-center' onClick={""}>Load More</button>
//             </div>

//         </div>
//     );
// };

// export default FlashSale;

// FlashSale.jsx
// FlashSale.jsx
import { useEffect, useState } from 'react';
import CardsOfProducts from '../fantasticprople/cardsOfProducts/CardsOfProducts';
// import CardsOfProducts from '../fantasticprople/CardsOfProducts/CardsOfProducts';

const FlashSale = () => {
    const [displayCount, setDisplayCount] = useState(12);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchAndShuffleProducts();
    }, []);

    const fetchAndShuffleProducts = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/user/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            const shuffledProducts = shuffleArray(data.result || []);
            setProducts(shuffledProducts);
        } catch (error) {
            console.error('Error fetching products data:', error);
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setDisplayCount(prevCount => prevCount + 10);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className='lg-11/12 mx-auto my-20 lg:mx-10'>
            <h2 className='text-3xl mb-4 font-bold ml-1'>Just For You</h2>

            <section className="">
                {/* main grid container */}
                <div className="grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {products.slice(0, displayCount).map((data, index) => (
                        <CardsOfProducts key={index} singleProduct={data} />
                    ))}
                </div>
            </section>
            {/* this is the flash sale card section ends */}
            <div className='mx-auto text-center mb-12 mt-6'>
                <button 
                    className='py-3 px-32 rounded-lg bg-[#FC9E66] text-white font-bold text-lg text-center'
                    onClick={loadMore}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Load More'}
                </button>
            </div>
        </div>
    );
};

export default FlashSale;


