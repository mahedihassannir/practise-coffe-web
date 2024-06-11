import { BiArchive, BiArchiveIn,} from "react-icons/bi";
import { Link } from "react-router-dom";

const SellerTool = () => {
    return (
        <div className="">
            
          <div className=" bg-base-300 pb-10">
<div className="flex px-5 justify-between py-5 items-center">
<div>
<h2 className="text-2xl font-bold">Seller Vouchers</h2>
<p className="text-lg">Add vouchers to boost your sales,sell more items.How vouchers help in sales <span className="text-orange-500 font-semibold">Learn More</span></p>
</div>
<Link to={`/dashboard/sellertools/additional`}><button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg">Add New Voucher</button></Link>
</div>

<div className="bg-base-200 rounded-lg p-5 mx-8">
<h2 className="text-xl font-semibold">Daraz recommedations for you </h2>
<p className="text-lg">Suggested pre defined vouchers which takes only quick one-step creations</p>

<div className="mt-5 grid gap-5 px-5 pb-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
<div className="bg-orange-100 rounded-xl">
<div className="relative">
<button className="bg-purple-800 rounded text-white px-4 py-1 font-semibold right-0 absolute">Recommanded</button>
</div>
<div className="flex py-10 justify-between items-center px-5">
<div className="space-y-1">
<p className="text-2xl font-semibold text-orange-600">35 BDT Off</p>
<p className="text-md text-gray-500">Min spend 500 BDT</p>
<p className="text-lg font-semibold">Validity 7 days</p>
</div>
<button className="text-lg font-semibold text-white rounded-lg bg-orange-600 px-4 py-2">Try Now</button>
</div>

</div>
<div className="bg-orange-100 rounded-xl">
<div className="relative">
<button className="bg-purple-800 rounded text-white px-4 py-1 font-semibold right-0 absolute">Recommanded</button>
</div>
<div className="flex py-10 justify-between items-center px-5">
<div className="space-y-1">
<p className="text-2xl font-semibold text-orange-600">100 BDT Off</p>
<p className="text-md text-gray-500">Min spend 1800 BDT</p>
<p className="text-lg font-semibold">Validity 7 days</p>
</div>
<button className="text-lg font-semibold text-white rounded-lg bg-orange-600 px-4 py-2">Try Now</button>
</div>


</div>
<div className="bg-orange-100 rounded-xl">
<div className="relative">
<button className="bg-purple-800 rounded text-white px-4 py-1 font-semibold right-0 absolute">Recommanded</button>
</div>
<div className="flex py-10 justify-between items-center px-5">
<div className="space-y-1">
<p className="text-2xl font-semibold text-orange-600">1000 BDT Off</p>
<p className="text-md text-gray-500">Min spend 20000 BDT</p>
<p className="text-lg font-semibold">Validity 7 days</p>
</div>
<button className="text-lg font-semibold text-white rounded-lg bg-orange-600 px-4 py-2">Try Now</button>
</div>


</div>
</div>
</div>

</div>

<div className="bg-base-200 p-8">
<h2 className="text-2xl font-bold">All Vouchers</h2>
<div className="flex gap-5 pt-5">
<h3 className="text-lg font-semibold text-orange-500">Collectable Vouchers</h3>
<h3 className="text-lg font-semibold">Voucher Code</h3>
</div>
<hr className="h-.5 bg-slate-600" />
<div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5">
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
<input type="text" className="border rounded text-center border-black" placeholder="Voucher Name" name="" id="" />
<input type="date" className="border rounded border-black" placeholder="Date From" name="" id="" />
<input type="date" className="border rounded border-black" placeholder="End Date" name="" id="" />
<select name="" className="border rounded border-black" id="">
<option value="">Status</option>
<option value="market"></option>
<option value="market"></option>
<option value="market"></option>
</select>
</div>
<button className="text-white bg-orange-600 px-4 py-2 rounded-lg font-semibold">Search</button>
</div>

<ul className="bg-base-300 mt-10 p-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 text-center gap-3">
<ol className="text-lg font-semibold">Voucher Name</ol>
<ol className="text-lg font-semibold">Valid Period</ol>
<ol className="text-lg font-semibold">Discount</ol>
<ol className="text-lg font-semibold">Min.Spend</ol>
<ol className="text-lg font-semibold">Display Area</ol>
<ol className="text-lg font-semibold">Applied To</ol>
<ol className="text-lg font-semibold">Status</ol>
<ol className="text-lg font-semibold">Operation</ol>
</ul>
<div className="">
<BiArchiveIn className="w-14 h-14 mx-auto mt-5 text-gray-400"></BiArchiveIn>
</div>
</div>
        </div>
    );
};

export default SellerTool;