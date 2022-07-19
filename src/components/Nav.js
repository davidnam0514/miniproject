import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div className='nav'>
        <Link className='link' to="/foodapi">Food Nutrients</Link>
        <Link className='link' to="/refridgerator">나의 냉장고</Link>
        <Link className='link' to="/freezer">나의 냉동고</Link>
      </div>
    )

}

export default Nav;