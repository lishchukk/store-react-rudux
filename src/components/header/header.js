import React from 'react';
import {Link} from "react-router-dom";

import './header.css'

const Header = ({numItems, total}) => {
    return (
        <header className='shop-header row'>
            <Link to='/'>
                <div  className='logo text-dark'> ReStore </div>
            </Link>

            <Link to='/cart/'>
                <div  className='shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    {numItems} items (${total})
                </div>
            </Link>

            {/*<ul className='d-flex'>*/}
            {/*    <li>*/}
            {/*        <Link to='/'>*/}
            {/*            <span>Home</span>*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to='/card/'>*/}
            {/*            Card*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </header>
    );
};

export default Header;