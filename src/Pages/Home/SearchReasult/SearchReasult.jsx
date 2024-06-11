import { useLocation } from "react-router-dom";
import CardsOfProducts from "../../../Components/fantasticprople/cardsOfProducts/CardsOfProducts";
// import CardsOfProducts from "../../../Components/fantasticprople/CardsOfProducts/CardsOfProducts";

const SearchReasult = () => {

    const location = useLocation();

    const searchData = location.state && location.state.result;

    // console.log(searchData);




    return (
        <div className="w-full py-5">

            <div className="lg:flex">

                {/* this is left side function like pricing and sorting and fintaring and griding  */}
                <div className="lg:w-[20%]">

                </div>
                {/* this is left side function like pricing and sorting and fintaring and griding  */}


                {/* //-----------------------// */}

                {/* this is right side */}
                <div className=" lg:w-[70%] px-1 grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        searchData.map(allcategory => <CardsOfProducts singleProduct={allcategory} />)
                    }
                </div>
            </div>


        </div>
    );
};

export default SearchReasult;