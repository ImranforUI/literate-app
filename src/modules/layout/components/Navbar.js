import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../../redux/users/user.actions';
import { USERS_FEATURE_KEY } from '../../../redux/users/userReducer';

let Navbar = () => {

    let dispatch = useDispatch();
    let history = useHistory();
    let userInfo = useSelector((state) => {
        return state[USERS_FEATURE_KEY]
    });

    let { loading, isAuthenticated } = userInfo;

    // logoutUser
    let logoutUser = () => {
        dispatch(logout(history))
    }

    let afterLinks = (
        <React.Fragment>
            <React.Fragment>
                <li className='nav-item'>
                    <Link to='/search' className='nav-link mx-2 text-white'>Search Data</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/display' className='nav-link text-white'>Display Data</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/register' className='nav-link text-white'>Register</Link>
                </li>
                <li className='nav-item'>
                    <Link to='#' onClick={logoutUser} className='nav-link text-white'>Logout</Link>
                </li>
            </React.Fragment>
        </React.Fragment>
    );

    let beforeLinks = (
        <React.Fragment>
            <li className='nav-item'>
                <Link to='/login' className='nav-link text-white'>Login</Link>
            </li>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg scrolling-navbar bg-dark fixed-top">
                <div className="container">
                    <Link href="/" className='navbar-brand'>
                        <i class="fas fa-edit fa-2x text-white"> Literate</i>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to='/' className="nav-link text-white"> Home <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/about' className="nav-link mx-2 text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link text-white">Contact</Link>
                            </li>
                            {
                                !loading &&
                                <React.Fragment>
                                    {
                                        !isAuthenticated ? beforeLinks : afterLinks
                                    }
                                </React.Fragment>
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;