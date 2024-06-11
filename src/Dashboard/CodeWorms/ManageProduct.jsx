import React from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    return (
        <div>

            <Link to="/dashboard/addproduct">


                <div className="bg-red-500 w-40 h-20 ">


                    go to add product   
                </div>




            </Link>

        </div>
    );
};

export default ManageProduct;