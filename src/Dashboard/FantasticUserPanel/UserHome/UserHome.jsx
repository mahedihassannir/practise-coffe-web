
import './UserHome.css'


import UserNav from './UserHomeComponents/UserNav'
import UserHomeSecondSection from './UserHomeComponents/UserHomeSecondSection'
import UserHomeThirdSection from './UserHomeComponents/UserHomeThirdSection';

const UserHome = () => {
    return (
        <section className='user-home'>
            {/* userHome top section */}
            <UserNav />
            {/* userHome top section Ends*/}

            {/* second  section Video and State */}
            <UserHomeSecondSection />
            {/* second  section Video and State  ends*/}

            {/* third section Listing TopProducts,Featured Products, and recent activity */}
            <UserHomeThirdSection />
        </section>
    );
};

export default UserHome;