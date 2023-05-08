import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCoffee from './singleCoffee';

const Home = () => {
    let data = useLoaderData()


    return (
        <div className='grid grid-cols-2 gap-5 w-11/12 mx-auto mt-10'>
            {
                data.map(res => <SingleCoffee

                    key={res._id}

                    data={res}
                >


                </SingleCoffee>)
            }
        </div>
    );
};

export default Home;