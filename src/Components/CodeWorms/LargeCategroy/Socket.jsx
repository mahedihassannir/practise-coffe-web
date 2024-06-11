import React from 'react';
import useCategory from '../Hooks/useCategory';
import SocketCard from './SocketCard';

const Socket = () => {
    const [category] = useCategory();
    const socketProduct = category.filter(item => item.category === "socket");
    return (
        <div>
            <div>
                <img className='w-full h-96' src="https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1703/mikalaimanyshau170300129/74099777-computer-shop-various-computer-parts-are-on-the-table-web-flat-vector-banner.jpg" alt="" />
            </div>
            <div>
                {
                    socketProduct.map(product => <SocketCard
                    key={product._id}
                    product={product}
                    ></SocketCard>)
                }
            </div>
        </div>
    );
};

export default Socket;