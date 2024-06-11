import React from 'react';
import EarningByItemMain from '../EarningByItemMain/EarningByItemMain';
import VisitsMain from '../VisitsMain/VisitsMain';
import RecentReviewsMain from '../RecentReviewsMain/RecentReviewsMain';

const EarningMain = () => {
    return (
        <div className='grid md:grid-cols-3 gap-8  rounded-sm  md:h-[300px] "'>
            <EarningByItemMain/>
            <VisitsMain/>
            <RecentReviewsMain/>
        </div>
    );
};

export default EarningMain;