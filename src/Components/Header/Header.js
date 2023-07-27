import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='Header'>
                <h1 className='t-shirt-header'>T-Shirt Bazar.Com</h1>
            </div>

            <div className='link-style'>
                <nav className='nav'>
                    <Link to='Home'>Home</Link>
                    <Link to='Reviews'>Reviews</Link>
                    <Link to='Dashboard'> BashBoard</Link>
                    <Link to='Blogs'> Blogs</Link>
                    <Link to='About'>About</Link>
                    

                </nav>
            </div>

        </div>


    );
};

export default Header;