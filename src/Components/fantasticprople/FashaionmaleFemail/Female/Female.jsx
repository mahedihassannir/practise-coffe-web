// Date:08/20/2023
// Author:MASUM
// Description:Show female products

import { FaStar } from "react-icons/fa";
// import CardsOfProducts from "../../CardsOfProducts/CardsOfProducts";
import { Link } from "react-router-dom";
import useProducts from "../../../../Hooks/Fantastic/useProducts";
import CardsOfProducts from "../../cardsOfProducts/CardsOfProducts";

const Female = () => {
    const { products } = useProducts();
    // console.log(products);

    // filter only food related data
    const fashionProducts = products?.result?.filter(product => product.secondCategory === "female");
    // console.log(fashionProducts);
    if (fashionProducts) {
        console.log("There are products in the fashion category.");
    } else {
        console.log("There are no products in the fashion category.");
    }
    return (
        <section>
            <div className="">
                <img className="mb-10 w-full h-36 lg:h-96" src="https://i.ibb.co/fYkQS5K/Screenshot-2023-08-17-182335-1.png" alt="" />

            </div>

            {/* some categories */}
            <div className='flex  justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-16 gap-y-10 lg:mx-32 my-10 justify-center items-center text-center'>
                    <Link ><img src="https://i.ibb.co/cgPLZgL/abaya.png" alt="" /></Link>
                    <Link ><img src="https://i.ibb.co/CPW7mVX/bags.png" alt="" /></Link>
                    <Link ><img src="https://i.ibb.co/YfTWvcT/flats.png" alt="" /></Link>
                    <Link ><img src="https://i.ibb.co/S6TPFQ3/heels.png" alt="" /></Link>
                    <Link ><img src="https://i.ibb.co/Wgd2fWq/jewlary.png" alt="" /></Link>
                    <img src="https://i.ibb.co/GJ0M0Lp/juttis.png" alt="" />
                    <img src="https://i.ibb.co/hKm2Z5K/kammez.png" alt="" />
                    <img src="https://i.ibb.co/2Fy6SV2/kurtis.png" alt="" />
                    <img src="https://i.ibb.co/jyLYj2P/party.png" alt="" />
                    <img src="https://i.ibb.co/09Yz6DF/sarree.png" alt="" />
                    <img src="https://i.ibb.co/BwBGkhN/sunglasses.png" alt="" />
                    <img src="https://i.ibb.co/qJPVM4Y/langaris.png" alt="" />
                    <img src="https://i.ibb.co/2cL2TMQ/watcchs.png" alt="" />


                </div>
            </div>
            {/* some categories ends */}



            {/* display female fashion product */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 lg:mx-20 my-10'>
                {
                    fashionProducts?.map(female => <CardsOfProducts singleProduct={female} />)
                }
            </div>
        </section>
    );
};

export default Female;