/** 
 * Author Name: Mst. Chadnee Akhter
 * Descripation: Banner
 * Date: 16-08-2023
*/

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css'

const Banner = () => {
    return (
        <div className='my-5'>
           <div className='md:flex md:gap-4 h-full items-center lg:flex '>
           <div className='md:w-3/4 mb-5 lg:mb-0 md:mb-0 bg-gray-500 lg:w-2/3'>
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
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/HTtjCN0/img4.jpg " alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Tbg3S2Y/img3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/yPdGH2m/img2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/BsXFLb7/bannerimg1.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>

    <div className='flex  flex-col h-full w-full gap-4 items-center '>
        <div className='lg:w-[440px] md:w-[250px] md:h-full h-1/2'>
        <img className='' src="https://i.ibb.co/kHXcvVv/img2.jpg" img alt="" />
        </div>
       
       <div className='lg:w-[440px] md:w-[250px] md:h-full h-1/2'>
       <img className=' ' src="https://i.ibb.co/6ysgTW7/img1.jpg" img alt="" />
       </div>
    </div>
           </div>
        </div>
    );
};


export default Banner;