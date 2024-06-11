// import useCategory from "../CodeWorms/Hooks/useCategory";
import { Link } from 'react-router-dom'


const SmallCategory = () => {

    // const [category] = useCategory();
    // console.log(category);


    return (
        <div className="mx-10">

            <h2 className="text-3xl font-bold mb-4">Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8">
                <Link to='/category/drone'>
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2 ">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/9pkQGZ7/img17.png" alt="" />
                        </div>
                        
                    </div>
                </Link>


                <Link to='/category/mobile'>
                    <div className="w-[140px] hover:shadow-md hover:rounded-md px-2 py-2 mb-2">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/Cb8LV8T/img16.png" alt="" />
                        </div>
                        
                        
                    </div>
                </Link>

                <Link to='/category/iphone'>
                    <div className="w-[140px] hover:shadow-md hover:rounded-md px-2 py-2 mb-2">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/k0gnpwT/img13.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/computer'>
                    <div className="w-[140px] hover:shadow-md hover:rounded-md px-2 py-2 mb-2 ">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/XXfvpQZ/img15.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/wireless'>
                    <div className="w-[140px] hover:shadow-md hover:rounded-md px-2 py-2 mb-2">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/tLsJXZS/img14.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/charger'>
                    <div className="w-[140px] hover:shadow-md hover:rounded-md px-2 py-2 mb-2 ">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/k0gnpwT/img13.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/cable'>
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2 ">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/G9LYKHP/img11.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/electronics'>
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/Zx6fNhs/img10.png" alt="" />
                        </div>
                        
                    </div>
                </Link>


                <Link to='/category/wifi'>
                    <div className="w-[140px] hover:shadow-md hover:rounded-md px-2 py-2 mb-2 ">
                        <div className="flex justify-center items-center ">
                            <img className="pt-2" src="https://i.ibb.co/jM6X1cR/img9.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/headphones'>
                    <div className="w-[140px] hover:shadow-md hover:rounded-md px-2 py-2 mb-2 ">
                        <div className="flex justify-center items-center">
                            <img className="pt-2" src="https://i.ibb.co/B4jgz7G/img8.png" alt="" />
                        </div>
                        
                        
                        
                    </div>
                </Link>
                <Link to='/category/toys'>
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2 ">
                        <div className="flex justify-center items-center">
                            <img className="pt-2" src="https://i.ibb.co/CBjM8x2/img7.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/tablet'>
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2">
                        <div className="flex justify-center items-center">
                            <img className="pt-2" src="https://i.ibb.co/g4zfYFK/img6.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/keyboard'>
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2">
                        <div className="flex justify-center items-center">
                            <img className="pt-2" src="https://i.ibb.co/1MmpqnT/img5.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to="/category/mouse">
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2">
                        <div className="flex justify-center items-center">
                            <img className="pt-2" src="https://i.ibb.co/tMLrHq1/img3.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/laptop'>
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2">
                        <div className="flex justify-center items-center">
                            <img className="pt-2" src="https://i.ibb.co/MDmRtYf/img2.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
                <Link to='/category/socket'>
                    <div className="w-[140px] mb-2 hover:shadow-md hover:rounded-md px-2 py-2">
                        <div className="flex justify-center items-center">
                            <img className="pt-2" src="https://i.ibb.co/0FYqrZM/img1.png" alt="" />
                        </div>
                        
                    </div>
                </Link>
            </div>
        </div>


    );
};

export default SmallCategory;