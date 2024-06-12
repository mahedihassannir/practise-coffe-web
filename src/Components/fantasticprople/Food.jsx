// // Date:08/19/23
// // Author: MASUM
// // Description: All Food display
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import useProducts from "../../Hooks/Fantastic/useProducts";
// import CardsOfProducts from './CardsOfProducts/CardsOfProducts';
// import { useEffect, useState } from 'react';


// const Food = () => {
//     const { products } = useProducts()
//     console.log(products);

//     // filter only food related data
//     const foodProducts = products?.result?.filter(product => product.category === "Food");
//     console.log(foodProducts);
//     if (foodProducts) {
//         console.log("There are products in the food category.");
//     } else {
//         console.log("There are no products in the food category.");
//     }
//     return (
//         <section>
//             {/* food swiper banner */}
//             <div className='lg:mx-20 my-10'>
//                 <Swiper
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     navigation={true}
//                     modules={[Autoplay, Pagination, Navigation]}
//                     className="mySwiper "
//                 >
//                     <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/8f730e50-b4a8-49f1-8f32-65c7ba064da5_BD-1188-344.jpg" alt="" /></SwiperSlide>
//                     <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/cb115603-66b4-4f66-8f52-646caf8d728c_BD-1188-344.jpg" alt="" /></SwiperSlide>
//                     <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/514f9952-7f9f-4cf3-9ef1-b717ffdf93de_BD-1188-344.jpg" alt="" /></SwiperSlide>

//                 </Swiper>
//             </div>

//             {/* display Foods */}
//             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-30 gap-y-5 lg:mx-20 my-10'>
//                 {
//                     foodProducts?.map(foods => <CardsOfProducts singleProduct={foods} />)
//                 }
//             </div>

//             <img className='w-11/12 mx-auto py-2' src="https://gcp-img.slatic.net/lazada/783778c1-b701-43cc-be1b-ce0f890539f8_BD-1188-344.jpg" alt="" />

//             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-30 gap-y-5 lg:mx-20 my-10'>
//                 {
//                     foodProducts?.map(foods => <CardsOfProducts singleProduct={foods} />)
//                 }
//             </div>
//         </section>
//     );
// };

// export default Food;
// Date:08/19/23
// Author: MASUM
// Description: All Food display
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from "../../Hooks/Fantastic/useProducts";
// import CardsOfProducts from './CardsOfProducts/CardsOfProducts';
import { useEffect, useState } from 'react';
import CardsOfProducts from './cardsOfProducts/CardsOfProducts';
// import CardsOfProducts from './CardsOfProducts/CardsOfProducts';

const Food = () => {
    const { products, loading, error } = useProducts();
    // console.log(products);

    // filter only food related data
    const foodProducts = products?.result?.filter(product => product.category === "Food");
    // console.log(foodProducts);
    if (foodProducts) {
        console.log("There are products in the food category.");
    } else {
        console.log("There are no products in the food category.");
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section>
            {/* food swiper banner */}
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

            {/* display Foods */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-30 gap-y-5 lg:mx-20 my-10'>
                {
                    foodProducts?.map((foods, index) => <CardsOfProducts key={index} singleProduct={foods} />)
                }
            </div>

            {/* <img className='w-11/12 mx-auto py-2' src="https://gcp-img.slatic.net/lazada/783778c1-b701-43cc-be1b-ce0f890539f8_BD-1188-344.jpg" alt="" />

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-30 gap-y-5 lg:mx-20 my-10'>
                {
                    foodProducts?.map((foods, index) => <CardsOfProducts key={index} singleProduct={foods} />)
                }
            </div> */}
        </section>
    );
};

export default Food;
