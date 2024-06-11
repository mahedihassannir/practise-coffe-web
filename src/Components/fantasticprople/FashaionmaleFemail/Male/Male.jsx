// Date:08/20/2023
// Author:MASUM
// Description:Show male products

import { FaStar } from "react-icons/fa";

// import CardsOfProducts from "../../CardsOfProducts/CardsOfProducts";
import { Link } from "react-router-dom";
import useProducts from "../../../../Hooks/Fantastic/useProducts";
import CardsOfProducts from "../../cardsOfProducts/CardsOfProducts";

const Male = () => {
    const { products } = useProducts();
    // console.log(products);

    // filter only food related data
    const fashionProducts = products?.result?.filter(product => product.secondCategory === "male");
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
            <div className='flex  justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-16 gap-y-10 lg:mx-32 my-10 justify-center items-center text-center'>
                    <Link ><img src="https://i.ibb.co/MkRT29B/watches.png" alt="" /></Link>
                    <Link ><img src="https://i.ibb.co/KhXGwDc/wallet.png" alt="" /></Link>
                    <Link ><img src="https://i.ibb.co/LhXz6wt/t-shirt.png" alt="" /></Link>
                    <Link ><img src="https://i.ibb.co/Lgzkv3R/sunglasses.png" alt="" /></Link>
                    <Link ><img src="https://i.ibb.co/dQjf357/shorts.png" alt="" /></Link>
                    <img src="https://i.ibb.co/KhXGwDc/wallet.png" alt="" />
                    <img src="https://i.ibb.co/XCLRhKN/caps.png" alt="" />
                    <img src="https://i.ibb.co/Tw6kfqd/sandel.png" alt="" />
                    <img src="https://i.ibb.co/kQWrTgt/seakers.png" alt="" />
                    <img src="https://i.ibb.co/1drXrn2/polo.png" alt="" />
                    <img src="https://i.ibb.co/qCX91xH/lofer.png" alt="" />
                    <img src="https://i.ibb.co/p3fdYq1/fashon-jowllart.png" alt="" />
                    <img src="https://i.ibb.co/jhkFntw/balte.png" alt="" />
                    <img src="https://i.ibb.co/hMrj7s3/bags.png" alt="" />
                    <img src="https://i.ibb.co/YBW8B2S/jens.png" alt="" />


                </div>
            </div>

            {/* display male fashion product */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 lg:mx-20 my-10'>
                {
                    fashionProducts?.map(male => <CardsOfProducts singleProduct={male} />)
                }
            </div>
        </section>
    );
};

export default Male;