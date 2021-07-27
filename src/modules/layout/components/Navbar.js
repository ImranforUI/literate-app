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
                    <Link to='/search' className='nav-link mx-2 font-weight-bold'>Search Data</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/display' className='nav-link font-weight-bold'>Display Data</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/register' className='nav-link font-weight-bold'>Register</Link>
                </li>
                <li className='nav-item'>
                    <Link to='#' onClick={logoutUser} className='nav-link text-white font-weight-bold'>Logout</Link>
                </li>
            </React.Fragment>
        </React.Fragment>
    );

    let beforeLinks = (
        <React.Fragment>
            <li className='nav-item'>
                <Link to='/login' className='nav-link font-weight-bold'>Login</Link>
            </li>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark scrolling-navbar fixed-top">
                <div className="container">
                    <Link href="/" className='navbar-brand'>
                        <i class="fas fa-edit fa-2x"> Literate</i>
                    </Link>
                    <button class="navbar-toggler btn-outline-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link font-weight-bold"> Home <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/about' className="nav-link mx-2 font-weight-bold">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link font-weight-bold">Contact</Link>
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