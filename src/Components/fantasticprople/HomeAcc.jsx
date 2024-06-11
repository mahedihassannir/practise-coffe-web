// Date:08/19/23
// Author: MASUM
// Description: All homeAcc display
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from "../../Hooks/Fantastic/useProducts";
// import CardsOfProducts from './CardsOfProducts/CardsOfProducts';
import { Link } from 'react-router-dom';
import CardsOfProducts from './cardsOfProducts/CardsOfProducts';


const HomeAcc = () => {
    const { products } = useProducts();
    // console.log(products);

    // filter only food related data
    const homeProducts = products?.result?.filter(product => product.category === "homeAcc");
    // console.log(homeProducts);
    if (homeProducts) {
        // console.log("There are products in the homeProducts category.");
    } else {
        // console.log("There are no products in the homeProducts category.");
    }
    return (
        <section>
            {/* HomeAcc swiper banner */}

            {/* display homeAcc Link images */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center lg:px-20 my-20'>
                <Link to={"/category/bedSheets"}>
                    <img src="https://gcp-img.slatic.net/lazada/86a4ac37-7bf4-457c-ae9b-6897c2c16082_BD-288-300.jpg" alt="" />
                </Link>

                <Link to={"/category/hangers"}>
                    <img src="https://gcp-img.slatic.net/lazada/3e396865-2a3c-4217-8d1d-96996958d05c_BD-288-300.jpg" alt="" />
                </Link>

                <Link to={"/category/clocks"}>
                    <img src="https://gcp-img.slatic.net/lazada/db711df1-2c95-485c-ad13-50be454a981f_BD-288-300.jpg" alt="" />
                </Link>

                <Link to={"/category/cushions"}>
                    <img src="https://gcp-img.slatic.net/lazada/e6937c31-2afb-49ae-99e1-a91e47e3c4fe_BD-288-300.jpg" alt="" />
                </Link>

                <Link to={"/category/wall"}>
                    <img src="https://gcp-img.slatic.net/lazada/51412aef-9f11-403c-addb-6c50b33b4e61_BD-288-300.jpg" alt="" />
                </Link>

                <Link to={"/category/lights"}>
                    <img src="https://gcp-img.slatic.net/lazada/e83ed0a5-fdec-44a0-9eb3-916814498da8_BD-288-300.jpg" alt="" />
                </Link>

            </div>

            {/* display homeAcc cool images */}
            <div className='my-10'>
                <img className='' src="https://laz-img-cdn.alicdn.com/imgextra/i3/O1CN01nyj7lJ1iMn9qaai8i_!!6000000004399-0-tps-1920-990.jpg" alt="" />
                <div className='flex justify-center my-10'>
                    <img src="https://gcp-img.slatic.net/lazada/c1533efd-08f9-43c1-80f1-24ca13d8d46b_BD-1188-90.jpg" alt="" />
                </div>
                <img src="https://laz-img-cdn.alicdn.com/imgextra/i1/O1CN018pB5341eYSmtIa6gk_!!6000000003883-0-tps-1920-984.jpg" alt="" />
            </div>

            {/* display homeAcc products */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 lg:mx-20 my-10'>
                {
                    homeProducts?.map(homeAcc => <CardsOfProducts singleProduct={homeAcc} />)
                }
            </div>

        </section>
    );
};

export default HomeAcc;