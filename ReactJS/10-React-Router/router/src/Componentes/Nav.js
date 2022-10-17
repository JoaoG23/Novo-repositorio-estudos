import React from "react";
import { Link } from "react-router-dom";
import Auth from "./AuthBottom";

function Nav() {
    return(<div className='navbar'>
        <h1>Logo</h1>
        <ul className='lista'>
            <Auth></Auth>
            <li><Link to='/aulas'>Aulas</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
        </ul>
    </div>
    )
}

export default Nav;