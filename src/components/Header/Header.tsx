import React from 'react';
import './Header.css';

const Header : React.FC = () => {
    return(
        <div className="HeaderClass">
            <h1 className="headtext">The Warehouse</h1>
            <button className="buttontext">Logout</button>
        </div>
    )
}

export default Header;