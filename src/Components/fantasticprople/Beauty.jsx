// Date:08/19/23
// Author: MASUM
// Description: All Beauty display
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import CardsOfProducts from './CardsOfProducts/CardsOfProducts';
import CartProductDetails from '../Avengers/CheckOutComponents/CartProductDetails/CartProductDetails';
import useProducts from '../../Hooks/Fantastic/useProducts';
import UserpaymentHistory from '../../Dashboard/FantasticUserPanel/UserpaymentHistory/UserpaymentHistory';
import CardsOfProducts from './cardsOfProducts/CardsOfProducts';
// import { useHistory } from 'react-router-dom';
const Beauty = () => {
    const { products } = useProducts();
    // const history = UserpaymentHistory();

    // const history = useHistory();

    // console.log(products);

    // filter only food related data
    const beautyProducts = products?.result?.filter(product => product.category === "beauty");
    console.log(beautyProducts);
    if (beautyProducts) {
        console.log / ("There are products in the beauty category.");
    } else {
        console.log("There are no products in the beauty category.");
    }

    // const handleCategoryClick = (category) => {
    //     console.log(category);
    //     history.push(`/category/${category}`);
    // };
    return (
        <section>
            {/* beauty swiper banner */}
            <div className='lg:mx-20 my-10'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/8f730e50-b4a8-49f1-8f32-65c7ba064da5_BD-1188-344.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/cb115603-66b4-4f66-8f52-646caf8d728c_BD-1188-344.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/514f9952-7f9f-4cf3-9ef1-b717ffdf93de_BD-1188-344.jpg" alt="" /></SwiperSlide>

                </Swiper>
            </div>
            {/* display beauty category */}
            <div className='flex  justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-16 gap-y-10 lg:mx-20 my-10 justify-center items-center text-center'>
                    {/* <div onClick={() => handleCategoryClick('lips')} ><img src="https://i.ibb.co/k4mKbt5/beauty-category-1.jpg" alt="" /></div> */}
                    <Link to="/category/lips"><img src="https://i.ibb.co/k4mKbt5/beauty-category-1.jpg" alt="Lips" /></Link>
                    <Link to="/category/eyes"><img src="https://i.ibb.co/NTgJrMd/cf489e8d-5af8-4cdc-bf1c-4592f3cd462e-BD-185-250.jpg" alt="" /></Link>
                    <Link to="/category/face"><img src="https://i.ibb.co/41DMyK9/220ea7f1-d952-433d-afb9-85b13141b51e-BD-185-250.jpg" alt="" /></Link>
                    <Link to="/category/nails"><img src="https://i.ibb.co/WDctFGy/d724fbf3-3351-497c-9a9a-ce6d0c07be79-BD-185-250.jpg" alt="" /></Link>
                    <Link to="/category/mensCare"><img src="https://i.ibb.co/Cv1m0Fc/a0228d35-5a1e-4d81-81c2-a29fa91a88e2-BD-185-250.png" alt="" /></Link>

                    <Link to={"/category/soap"}>
                        <img src="https://i.ibb.co/thK2xcp/ca4c73f4-3876-4d2d-b54e-a5b2dff1e48b-BD-185-250.png" alt="" />
                    </Link>
                    <Link to={"/category/cream"}>
                        <img src="https://i.ibb.co/wM2z01S/2763e5ba-60b2-4dd4-8729-9ba370992b2e-BD-185-250.png" alt="" />
                    </Link>

                    <img src="https://i.ibb.co/R0r8v31/d14f5b27-0e86-4b5f-8b47-8ebfcc8991ec-BD-185-250.png" alt="" />
                    <Link to={"/category/perfume"}>
                        <img src="https://i.ibb.co/r5Jh7Jv/e1c90907-31c7-4fb4-a179-25b421c591ba-BD-185-250.png" alt="" />
                    </Link>
                    <Link to={"/category/menDeos"}>
                        <img src="https://i.ibb.co/SwQdBnC/821207a5-e30d-4232-93be-bed5f16ad1a3-BD-185-250.png" alt="" />

                    </Link>
                    <Link to={"/category/hairTreatment"}>
                        <img src="https://i.ibb.co/gSCSLXt/003b8052-f91f-4b4b-9210-aa16ac140956-BD-185-250.png" alt="" />
                    </Link>
                    <Link to={"/category/hairDryers"}>
                        <img src="https://i.ibb.co/DgjRjL7/09339b91-68ff-4655-9fc0-2aecd18b55d7-BD-185-250.png" alt="" />

                    </Link>
                    <Link to={"/category/hairColor"}>
                        <img src="https://i.ibb.co/yF4jwFQ/402eaf24-ad9b-4ceb-b040-cea92bcb2114-BD-185-250.png" alt="" />

                    </Link>
                    <Link to={"/category/curlerScolor"}>
                        <img src="https://i.ibb.co/f0GT2vG/e9766ebe-e4d0-486f-a2f9-6dff2ff61169-BD-185-250.png" alt="" />

                    </Link>
                    <Link to={"/category/facial"}>
                        <img src="https://i.ibb.co/RyhcKZ1/0612ce28-5748-460d-acdb-92d234e335ee-BD-185-250.png" alt="" />

                    </Link>
                    <Link to={"/category/Accessories"}>
                        <img src="https://i.ibb.co/0V8w6Hb/81dcb063-22cb-4e64-9bc2-90dfe2c7ab8f-BD-185-250.jpg" alt="" />

                    </Link>
                    <Link to={"/category/makeup"}>
                        <img src="https://i.ibb.co/9cBNXMm/b222c861-8f8f-4855-ab72-fabced045c54-BD-185-250.jpg" alt="" />

                    </Link>
                    <Link to={"/category/faceMusk"}>
                        <img src="https://i.ibb.co/HdG70xT/e4bfb387-a627-4397-8071-594f051c650b-BD-185-250.png" alt="" />

                    </Link>


                </div>
            </div>

            {/* display Beauty products */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3 lg:mx-20 my-10'>
                {
                    beautyProducts?.map(beauty => <CardsOfProducts singleProduct={beauty} />)
                }
            </div>

        </section>
    );
};

export default Beauty;