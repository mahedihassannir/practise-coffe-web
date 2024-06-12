import React from 'react';
import useProducts from '../../Hooks/Fantastic/useProducts';
// import CardsOfProducts from '../fantasticprople/CardsOfProducts/CardsOfProducts';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CardsOfProducts from '../fantasticprople/cardsOfProducts/CardsOfProducts';
const CategoryPage = () => {
    const { categoryName } = useParams();
    // console.log(categoryName);
    const { products } = useProducts();
    const categoryProducts = products?.result?.filter(product => product.category === categoryName);
    // console.log(categoryProducts);
    return (
        <div>

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
                    {/* <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/8f730e50-b4a8-49f1-8f32-65c7ba064da5_BD-1188-344.jpg" alt="" /></SwiperSlide> */}
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/cb115603-66b4-4f66-8f52-646caf8d728c_BD-1188-344.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/514f9952-7f9f-4cf3-9ef1-b717ffdf93de_BD-1188-344.jpg" alt="" /></SwiperSlide>

                </Swiper>
            </div>
            <div>
                <h1 className='ml-10 font-semibold '>{categoryName.toUpperCase()} Products: {categoryProducts?.length}</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3 lg:mx-20 my-10'>
                    {categoryProducts?.map(product => <CardsOfProducts key={product.id} singleProduct={product} />)}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;