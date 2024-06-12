import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import CardsOfProducts from './CardsOfProducts/CardsOfProducts';
import useProducts from '../../Hooks/Fantastic/useProducts';
import { Link } from 'react-router-dom';
import CardsOfProducts from './cardsOfProducts/CardsOfProducts';

const Kids = () => {
    const { products } = useProducts();
    console.log(products);

    // filter only food related data
    const kidsProducts = products?.result?.filter(product => product.category === "kids");
    // console.log(kidsProducts);
    if (kidsProducts) {
        console.log("There are products in the kidsProducts category.");
    } else {
        console.log("There are no products in the kidsProducts category.");
    }
    return (
        <section>
            {/* kids swiper banner */}
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
                    {/* <SwiperSlide><img className='w-full md:h-auto h-72' src="https://i.ibb.co/NC76Wp1/meena.jpg" /></SwiperSlide> */}
                    {/* <SwiperSlide><img className='w-full md:h-96' src="https://i.ibb.co/nC2XnpR/dorimon.webp" /></SwiperSlide> */}
                    {/* <SwiperSlide><img className='w-full md:h-auto h-72' src="https://i.ibb.co/yNTfn7D/Gopal-Var.jpg" /></SwiperSlide> */}

                </Swiper>
                <div className="grid grid-cols-6 gap-5 my-10">
                    {
                        kidsProducts?.map((x) =>
                            <CardsOfProducts singleProduct={x} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Kids;