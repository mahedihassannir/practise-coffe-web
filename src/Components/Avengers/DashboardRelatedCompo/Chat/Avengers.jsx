import React from 'react';
import ChatSidBar from './ChatSidBar/ChatSidBar';
import MessageField from './MessageField/MessageField';

const Avengers = () => {
    return (
		<div className='flex items-start text-[11px] font-semibold h-full '>
			<div className='w-[200px] h-full overflow-y-auto border-r border-gray-400 pr-2 mr-2 profiteContainer grayScroll'>
				<ChatSidBar />
			</div>
			<div className='flex-1 h-full'>
				<MessageField />
			</div>
		</div>
	);
};

export default Avengers;