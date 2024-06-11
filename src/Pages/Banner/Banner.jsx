

import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
const Banner = () => {
    return (
        <div className='mx-5 my-5 h-auto border-4  border-red-700'>
           <div className='md:flex h-full border-4  border-red-600 lg:flex gap-4 p-5 items-center'>
           <div className='md:w-2/3 mx-auto border-4 border-green-600 h-auto lg:w-2/3'>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/HTtjCN0/img4.jpg " alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src=" https://i.ibb.co/Tbg3S2Y/img3.jpg " alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src=" https://i.ibb.co/yPdGH2m/img2.jpg " alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/BsXFLb7/bannerimg1.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>

    <div className='border-4 mt-4 md:mt-0 lg:mt-0 border-red-500 h-full gap-4 flex flex-col items-center '>
  
        <img className='h-full w-full' src="https://i.ibb.co/kHXcvVv/img2.jpg" alt="" />
        <img className='h-full w-full' src="https://i.ibb.co/6ysgTW7/img1.jpg" alt="" />
    </div>
           </div>
        </div>
    );
};

export default Banner;