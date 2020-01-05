import React from 'react';
import { NavLink , withRouter} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className='container'>
                <a className='brand-logo'>My Voting App</a>
                <ul className='right'>
                    <li><NavLink to='/polls'>Polls</NavLink></li>
                    <li><NavLink to='/polls/create'>New Poll</NavLink></li>
                    <li><NavLink to='/users/create'>Register</NavLink></li>

                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);