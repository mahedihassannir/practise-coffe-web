import React from 'react';
import useCategory from '../Hooks/useCategory';
import IphoneCard from './IphoneCard';

const Iphone = () => {
    const [category] = useCategory();
    // console.log(category);

    const iPhones = category.filter(item => item.category === "iPhone");
    return (
        <div>
            <div>
                <img src="https://about.att.com/ecms/dam/snr/2020/November2020/StoryLevelBanner/11042020_iPhoneProMax_STORY_LEVEL_BANNER_1600x483.jpg" alt="" />
            </div>
            <div>
                {
                    iPhones.map(product => <IphoneCard
                        key={product._id}
                        product={product}
                    ></IphoneCard>)
                }
            </div>
        </div>
    );
};

export default Iphone;