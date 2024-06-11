// Date:08/19/23
// Author:MASUM
// Description:Display All Fashion Products

import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa';
// import CardsOfProducts from "./CardsOfProducts/CardsOfProducts";
import useProducts from "../../Hooks/Fantastic/useProducts";
import CardsOfProducts from './cardsOfProducts/CardsOfProducts';
// import CardsOfProducts from "./CardsOfProducts/CardsOfProducts";


const Fashion = () => {
    const { products } = useProducts();
    // console.log(products);

    // filter only food related data
    const fashionProducts = products?.result?.filter(product => product.category === "fashion");
    // console.log(fashionProducts);
    if (fashionProducts) {
        console.log("There are products in the fashion category.");
    } else {
        console.log("There are no products in the fashion category.");
    }

    return (
        <section>
            {/* fashion banner */}
            <div className="">
                <img className="mb-10 w-full h-36 lg:h-96" src="https://i.ibb.co/fYkQS5K/Screenshot-2023-08-17-182335-1.png" alt="" />

            </div>
            {/* ends */}

            {/* category */}
            <div className=' mx-5'>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <img src="https://gcp-img.slatic.net/lazada/bc40bb83-b2d0-4f30-a757-bdd7a1ba1a32_BD-388-180.png" alt="" />
                    <img src="https://gcp-img.slatic.net/lazada/676da7c0-9e8d-479f-aeab-74656f97c068_BD-388-180.png" alt="" />
                    <img src="https://gcp-img.slatic.net/lazada/8804da9d-40b7-470d-b95f-88864c980f58_BD-388-180.png" alt="" />
                </div>
                {/* Display Male And Female Category link with image */}
                <div className='pb-5 flex flex-col items-center lg:flex-row gap-5 justify-center'>
                    <Link to="/male"><img src="https://gcp-img.slatic.net/lazada/3dfb8aa9-f5a0-4d47-bab8-2f7c578a79b2_BD-588-681.jpg" alt="" /></Link>
                    <Link to="/female"><img src="https://gcp-img.slatic.net/lazada/aeee6c4d-1539-4d83-b4a8-82e08f631eb8_BD-588-681.jpg" alt="" /></Link>
                </div>
            </div>

            {/* display all fashion product */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-1 gap-y-10 lg:mx-20 my-10'>
                {
                    fashionProducts?.map((fashionProducts) => <CardsOfProducts key={fashionProducts?._id} singleProduct={fashionProducts} />)
                }

            </div>
        </section>
    );
};

export default Fashion;