import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>
                <ul>
                    <li><Link to="/">Table Data</Link></li>
                    <li><Link to="/form">Form Data</Link></li>
                    <li><Link to="/image">attached image</Link></li>
                </ul>
            </div>



        </>
    )
}

export default Header
