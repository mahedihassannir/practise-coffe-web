import { Link } from "react-router-dom";
import { FaGreaterThan, FaRocket } from 'react-icons/fa';
const Productad = () => {
    return (
        <div className="p-6">

            <div className="space-y-4 mb-4">
                <h2 className="text-3xl text-black font-semibold">Campaign Management</h2>
                <p className="text-xl font-semibold text-gray-700">Create Campaign and advertise products increase of getting more product views and more sales </p>
            </div>
            <div className="flex gap-x-3 w-auto">
                {/* Account summary */}
                <div className="bg-base-100 border rounded-lg pb-5 w-1/3">
                    <div className="flex mx-5 gap-3 justify-between px-4 py-3 items-center">
                        <h2 className="text-black text-2xl">Account Summary</h2>
                        <p className="text-orange-500 font-bold">View Details</p>
                    </div>
                    <div className="bg-base-200 mx-5 p-5 space-y-3">
                        <div className="flex justify-between text-lg gap-3">
                            <div>
                                <button className="px-2 py-1 rounded-md bg-green-500 text-white font-semibold border">PRE PAID</button>
                                <p>Available Credit</p>
                            </div>
                            <div>
                                <h3>Auto top-up</h3>
                                <h2 className="font-bold">BDT 0</h2>
                            </div>
                        </div>
                        <hr className="h-0.5 bg-gray-500" />
                        <div className="flex justify-between">
                            <p>Promotional credit balance</p>
                            <h2>BDT 2500</h2>
                        </div>
                    </div>
                </div>
                {/* Performance Summary */}
                <div className="w-2/3 bg-base-100 border rounded-lg text-lg px-5 py-3 space-y-8">
                    <div className="flex justify-between gap-3 items-center">
                        <div>
                            <h2>Performance Summary</h2>
                            <p>This is a summary of last 30 days of ads performance</p>
                        </div>
                        <h2 className="text-orange-500 font-bold">View Details</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">

                        <div className="border rounded-lg bg-base-200  p-3">
                            <h3>Speed</h3>
                            <h2 className="font-bold">BDT 0</h2>
                        </div>
                        <div className="border rounded-lg bg-base-200  p-3">
                            <h3>Clicks</h3>
                            <h2 className="font-bold">0</h2>
                        </div>
                        <div className="border rounded-lg bg-base-200  p-3">
                            <h3>Store GMV</h3>
                            <h2 className="font-bold">BDT 0</h2>
                        </div>
                        <div className="border rounded-lg bg-base-200  p-3">
                            <h3>Store ROI</h3>
                            <h2 className="font-bold">x0</h2>
                        </div>
                    </div>
                </div>

                <div>
                </div>
            </div>
            {/* start to boost your sales in one click */}
            <div className="bg-base-100 p-5 my-5 space-y-7">
                <div className="space-y-3">
                    <h2 className="text-3xl font-semibold">Start to boost your sales in one click!</h2>
                    <p className="text-xl text-gray-700 font-semibold">Not sure where to start? <Link className="to-blue-500">Click here</Link> </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    <div className="flex justify-around  gap-x-4 items-center p-4 border-2 bg-base-200 rounded ">
                        <p className="w-14 h-14"><FaRocket className="w-14 h-14 text-orange-500"> </FaRocket></p>
                        <div className="space-y-2">
                            <p className="text-xl font-bold">Grow your sales - Basic for 15 days</p>
                            <h2 className="text-orange-600 text-lg font-bold">BDT 500 <span className="text-black">Daily budget</span></h2>
                        </div>
                        <button className="flex font-bold items-center px-4 py-2 bg-orange-600 text-white rounded-lg">Start <FaGreaterThan className="ml-1"></FaGreaterThan> </button>
                    </div>
                    <div className="flex justify-around  gap-x-4 items-center p-4 border-2 bg-base-200 rounded ">
                        <p className="w-14 h-14"><FaRocket className="w-14 h-14 text-orange-500"> </FaRocket></p>
                        <div className="space-y-2">
                            <p className="text-xl font-bold">Grow your sales - Basic for 15 days</p>
                            <h2 className="text-orange-600 text-lg font-bold">BDT 500 <span className="text-black">Daily budget</span></h2>
                        </div>
                        <button className="flex font-bold items-center px-4 py-2 bg-orange-600 text-white rounded-lg">Start <FaGreaterThan className="ml-1"></FaGreaterThan> </button>
                    </div>
                    <div className="flex justify-around  gap-x-4 items-center p-4 border-2 bg-base-200 rounded ">
                        <p className="w-14 h-14"><FaRocket className="w-14 h-14 text-orange-500"> </FaRocket></p>
                        <div className="space-y-2">
                            <p className="text-xl font-bold">Grow your sales - Basic for 15 days</p>
                            <h2 className="text-orange-600 text-lg font-bold">BDT 500 <span className="text-black">Daily budget</span></h2>
                        </div>
                        <button className="flex font-bold items-center px-4 py-2 bg-orange-600 text-white rounded-lg">Start <FaGreaterThan className="ml-1"></FaGreaterThan> </button>
                    </div>

                </div>
            </div>

            <div className="bg-base-100">
                <div className="flex justify-between items-center px-3 py-4 gap-x-2">
                    <h2 className="text-xl font-bold w-1/5">Campaign</h2>
                    <select className="w-1/6 border-2 border-gray-700 py-1 w-f font-semibold" name="" id="">
                        <option value="status ">Status</option>
                        <option value="status">Ok</option>
                        <option value="status">Status</option>
                    </select>
                    <select className="w-1/6 border-2 border-gray-700 py-1 w-f font-semibold" name="" id="">
                        <option value="status ">Ad Group</option>
                        <option value="status">Ok</option>
                        <option value="status">Status</option>
                    </select>
                    <input type="text" placeholder="Input Campaign Name" className="w-1/4 border-gray-700 text-gray-700 font-semibold px-2 py-1 border-2" />
                    <p className="w-1/7 text-orange-600 text-lg border-2 border-gray-700 px-3 py-1">+Create Campaign</p>
                </div>
                <hr className="text-gray-600 h-0.5" />
                <div className="my-5 bg-base-200 border-2 border-blue-900 text-center p-2">
                    <p className="text-lg">Make sure all your campaigns are active and have sufficient budgets to keep them running,otherwise,campaigns are paused automatically. <a href="">Click here</a> for more information. </p>
                </div>
                <div className="bg-base-300 flex gap-x-3 justify-around px-2 py-5 text-lg font-semibold">
                    <h2>Status</h2>
                    <p>Campaign Name</p>
                    <p>Daily Budget</p>
                    <p>Start Date</p>
                    <p>End Date</p>
                    <p>Update on</p>
                </div>
            </div>
        </div>
    );
};

export default Productad;

