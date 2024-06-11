import React from 'react';
import { Link } from 'react-router-dom';

import '../../ExtraCss/ExtraCss.css';


const AddItems = () => {




  return (

    <div className="">

      <div className="w-full grid justify-center grid-cols-1 gap-2 lg:grid-cols-4 ">


        <div className="">

          <Link to="/dashboard/orderresuns">

            <div className=" btn w-60 border-2 py-10 bg-red-400">

              Customer return

            </div>

          </Link>
          {/* this is linking to other  ends */}


        </div>

        {/* this is linking to other  */}
        <div className="">

          <Link to="/dashboard/custommerreview">

            <div className="w-60 btn border-2 py-10 bg-red-400">

              custommerreview

            </div>

          </Link>
          {/* this is linking to other  ends */}


        </div>

        {/* this is linking to other  */}
        <div className="">

          <Link to="/dashboard/ordermanage">

            <div className="w-60 btn border-2 py-10 bg-red-400">

              ordermanage

            </div>

          </Link>
          {/* this is linking to other  ends */}


        </div>

        {/* delivered products   */}
        <div className="">

          <Link to="/dashboard/deliveredorders">

            <div className="w-60 btn border-2 py-10 bg-red-400">

              delivered orders

            </div>

          </Link>
          {/* delivered products ends */}


        </div>

      </div>




    </div>
  );
};

export default AddItems;