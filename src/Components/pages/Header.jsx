import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-center pt-5'>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/addcoffee">AddCoffee</Link>
                    <Link to="/updatecoffee">buy coffee</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;