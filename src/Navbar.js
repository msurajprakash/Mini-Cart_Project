import React from 'react';

const Navbar = (props) => {
    
    return (
        <div className='nav'>
            <div className='navbar'>
                <div className='logoMenu'>
                    <a href='#' className='logo'><h1>CARTAPP</h1></a>

                    <div className='nav-menu'>
                        <ul className='nav-list'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Products</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src='https://img.icons8.com/ios-glyphs/256/shopping-cart.png' alt='' />
                    <span className='cartCount'>{props.cartCount()}</span>
                </div>

            </div>
        </div>
    )
}

export default Navbar;