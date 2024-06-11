
import { AiOutlineCaretDown } from "react-icons/ai";


const SelectComponent = ({ items, stateValue, setStateValue , ...rest}) => {
	
    

	return (
		<div
			onClick={event => {
				event.stopPropagation();
				setStateValue(!stateValue);
				rest.anotehrStateSate(false);
			}}
			className=' border py-1 px-3 bg-white rounded hover:border hover:border-blue-500 duration-500 cursor-pointer w-full  md:w-[180px] flex items-center justify-between relative '
		>
			<small>{rest.valueDisplay}</small>

			<small>
				<AiOutlineCaretDown
					className={`${stateValue && "rotate-180 "} duration-300`}
				/>
			</small>

			<div
				className={`px-3 z-[999] bg-white shadow absolute w-full left-0 top-[115%] overflow-hidden rounded duration-500 ${
					!stateValue
						? "max-h-0 opacity-0"
						: "max-h-[200px] opacity-100 py-1"
				}`}
			>
				{items.map((item, index) => (
					<div
						onClick={() => rest.setValue(item)}
						key={index}
						className='py-[4px]  text-[10px] font-semibold '
					>
						{item}
					</div>
				))} 
			</div>
		</div>
	);
};

export default SelectComponent;