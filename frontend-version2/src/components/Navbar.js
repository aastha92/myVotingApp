import React , {component, Component} from 'react';
import { NavLink , withRouter} from 'react-router-dom';

//for responsive navbar i have changed function component to class based component as I have to write jquery

class Navbar extends Component {

    render(){
        return(
            <div>
                <nav className="nav-wrapper grey darken-3">
                    <div className='container'>
                        <a className='brand-logo'>My Voting App</a>
                        <a href="#" className='sidenav-trigger' data-target='slide-out'>
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className='right hide-on-med-and-down'>
                            <li><NavLink to='/polls'>Polls</NavLink></li>
                            <li><NavLink to='/polls/create'>New Poll</NavLink></li>
                            <li><NavLink to='/users/create'>Register</NavLink></li>

                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-links">
                    <li><NavLink to='/polls'>Polls</NavLink></li>
                    <li><NavLink to='/polls/create'>New Poll</NavLink></li>
                    <li><NavLink to='/users/create'>Register</NavLink></li>
                </ul>

            </div>
        )
    }
}

export default withRouter(Navbar);