import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import CardsOfProducts from './CardsOfProducts/CardsOfProducts';
import useProducts from '../../Hooks/Fantastic/useProducts';
import CardsOfProducts from '../../Components/fantasticprople/cardsOfProducts/CardsOfProducts';

const Below = () => {
    const { products } = useProducts();
    // console.log(products);

    // filter only food related data
    const lowProducts = products?.result?.filter(product => product.secondCategory === "low");
    // console.log(lowProducts);
    if (lowProducts) {
        console.log("There are products in the lowProducts category.");
    } else {
        console.log("There are no products in the lowProducts category.");
    }
    return (
        <div className="m-10">
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
                    {/* <SwiperSlide><img className='w-full' src="https://i.ibb.co/J2vRnDC/boykot-israil.jpg" alt="" /></SwiperSlide> */}
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/cb115603-66b4-4f66-8f52-646caf8d728c_BD-1188-344.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/514f9952-7f9f-4cf3-9ef1-b717ffdf93de_BD-1188-344.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="grid grid-cols-6 gap-5 my-10">
                {
                    lowProducts?.map(x =>
                       <CardsOfProducts singleProduct={x}/>)
                }
            </div>
        </div>
    );
};

export default Below;