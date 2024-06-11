
import { FiPhone } from "react-icons/fi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const MessageField = () => {
    return (
		<div className='w-full h-full '>
			{/* profile section  */}
			<div className='flex w-full items-center justify-between p-2   cursor-pointer   duration-500 border-t border-b'>
				<div className='flex items-center gap-1'>
					{/* image and active status light  */}
					<div className='relative'>
						<div className='w-[40px] h-[40px] rounded-full overflow-hidden '>
							<img
								src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
								alt=''
								className=''
							/>
						</div>
						<div className='w-[7px] h-[7px] bg-[#61CC14] rounded-full absolute right-1 bottom-0 border border-[#EBEFF8]'></div>
					</div>
					{/* name and message  */}
					<div>
						<p className='leading-3 text-[12px]'>Tomu</p>
						<p className='text-[10px] text-gray-600'>Active</p>
					</div>
				</div>
				<div className='flex '>
					<div className='p-[6px] hover:bg-[#F5F5F5] rounded flex items-center justify-center text-sm'>
						<FiPhone />
					</div>
					<div className='p-[6px] hover:bg-[#F5F5F5] rounded flex items-center justify-center text-sm'>
						<PiDotsThreeVerticalBold />
					</div>
				</div>
			</div>

			<div className=' h-[calc(100vh-100px)]'>
				{/* message body  */}
				<div className='h-[calc(100%-50px)] py-2 text-[10px] font-normal flex flex-col gap-3 overflow-y-auto grayScroll profiteContainer pr-1'>
					{/* left side  */}
					<div className='flex items-end mr-auto gap-2  w-[55%] '>
						{/* image  */}
						<div className='w-[25px] h-[25px] rounded-full relative '>
							<img
								src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
								alt=''
								className='w-[25px] h-[25px] rounded-full'
							/>
						</div>

						<div className='flex flex-col justify-start items-start gap-[3px] flex-1'>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								Hello
							</p>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								What do you think about this?
							</p>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								In the 19th century, the growth of modern
								research universities led academic philosophy
								and other disciplines to professionalize and
								specialize. Since then, various areas of
								investigation that were traditionally part of
								philosophy have become separate academic
								disciplines, such as psychology.
							</p>
						</div>
					</div>

					{/* right side  */}
					<div className=' flex items-end  ml-auto gap-2  w-[55%] '>
						<div className='flex flex-col justify-start items-end gap-[3px] flex-1'>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Well
							</p>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Basically this looks good
							</p>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Can you suggest other variants?
							</p>
						</div>

						{/* image  */}
						<div className='w-[25px] h-[25px] rounded-full relative '>
							<img
								src='https://i.ibb.co/mRkND5B/Md-Golam-Rakib.jpg'
								alt=''
								className='w-[25px] h-[25px] rounded-full'
							/>
						</div>
					</div>

					{/* left side  */}
					<div className='flex items-end mr-auto gap-2  w-[55%] '>
						{/* image  */}
						<div className='w-[25px] h-[25px] rounded-full relative '>
							<img
								src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
								alt=''
								className='w-[25px] h-[25px] rounded-full'
							/>
						</div>

						<div className='flex flex-col justify-start items-start gap-[3px] flex-1'>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								Hello
							</p>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								What do you think about this?
							</p>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								In the 19th century, the growth of modern
								research universities led academic philosophy
								and other disciplines to professionalize and
								specialize. Since then, various areas of
								investigation that were traditionally part of
								philosophy have become separate academic
								disciplines, such as psychology.
							</p>
						</div>
					</div>

					{/* right side  */}
					<div className=' flex items-end  ml-auto gap-2  w-[55%] '>
						<div className='flex flex-col justify-start items-end gap-[3px] flex-1'>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Well
							</p>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Basically this looks good
							</p>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Can you suggest other variants?
							</p>
						</div>

						{/* image  */}
						<div className='w-[25px] h-[25px] rounded-full relative '>
							<img
								src='https://i.ibb.co/mRkND5B/Md-Golam-Rakib.jpg'
								alt=''
								className='w-[25px] h-[25px] rounded-full'
							/>
						</div>
					</div>

					{/* left side  */}
					<div className='flex items-end mr-auto gap-2  w-[55%] '>
						{/* image  */}
						<div className='w-[25px] h-[25px] rounded-full relative '>
							<img
								src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
								alt=''
								className='w-[25px] h-[25px] rounded-full'
							/>
						</div>

						<div className='flex flex-col justify-start items-start gap-[3px] flex-1'>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								Hello
							</p>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								What do you think about this?
							</p>
							<p className='py-[5px] rounded px-2 bg-[#F8F0C8]'>
								In the 19th century, the growth of modern
								research universities led academic philosophy
								and other disciplines to professionalize and
								specialize. Since then, various areas of
								investigation that were traditionally part of
								philosophy have become separate academic
								disciplines, such as psychology.
							</p>
						</div>
					</div>

					{/* right side  */}
					<div className=' flex items-end  ml-auto gap-2  w-[55%] '>
						<div className='flex flex-col justify-start items-end gap-[3px] flex-1'>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Well
							</p>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Basically this looks good
							</p>
							<p className='py-[5px] rounded px-2 bg-[#adeaf0]'>
								Can you suggest other variants?
							</p>
						</div>

						{/* image  */}
						<div className='w-[25px] h-[25px] rounded-full relative '>
							<img
								src='https://i.ibb.co/mRkND5B/Md-Golam-Rakib.jpg'
								alt=''
								className='w-[25px] h-[25px] rounded-full'
							/>
						</div>
					</div>
				</div>
				{/* typefield and send btn  */}
				<div className='h-[50px] cursor-pointer font-bold border-t py-2 flex gap-2'>
					<div className='h-full flex-1 '>
						<input
							type='text'
							name=''
							id=''
							className='h-full w-full outline-none rounded px-2 focus:shadow-[0px_0px_5px_rgba(0,0,0,.5)] duration-300'
							placeholder='Hello, My name is MG'
						/>
					</div>

					<div className='w-[60px] bg-[#F5C000] rounded-sm flex items-center justify-center'>
						<button>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageField;