/** @format */

const AuthorOfDashboard = () => {
	return (
		<div className='bg-[#FFFFFF] text-black px-5  py-5 rounded-md mt-12 mb-5 w-[250px] h-[250px]'>
			<div>
				<div className='flex items-center justify-center'>
					<img
						className='w-[80px] h-[80px] rounded-[50%] '
						src='https://i.ibb.co/kHKXS8C/760dab6c14dacbbb9e1cbdb719749032.jpg'
						alt=''
					/>
				</div>
				<div className='text-center '>
					<div className='flex items-center justify-center gap-3'>
						<h3 className='mt-3 text-xl font-bold'>
							Toma Akter Hashi{" "}
						</h3>
						<div className='w-[12px] h-[12px] mt-3 rounded-full bg-[#19D895]'></div>
					</div>
					<h4>toma@gmail.com</h4>
					<p className='text-xl mt-1 font-bold text-[#19D895]'>
						Your Plan: Standard
					</p>
				</div>
			</div>
		</div>
	);
};

export default AuthorOfDashboard;
