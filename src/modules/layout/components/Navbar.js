import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { USERS_FEATURE_KEY } from '../../../redux/users/userReducer';

let Navbar = () => {

    let userInfo = useSelector((state) => {
        return state[USERS_FEATURE_KEY];
    });

    let { admin } = userInfo;

    let afterLinks = (
        <React.Fragment>
            {
                admin ? <React.Fragment>
                    <li className='nav-item'>
                        <Link to='/register' className='nav-link mx-2 text-white'>Registration</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/display' className='nav-link text-white'>Display Data</Link>
                    </li>
                </React.Fragment> : null
            }
        </React.Fragment>
    );

    let beforeLinks = (
        <React.Fragment>
            <li className='nav-item'>
                <p className="badge badge-danger">Login For More!</p>
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
                            {
                                admin &&
                                <React.Fragment>
                                    {
                                        admin.length === 0 ? beforeLinks : afterLinks
                                    }
                                </React.Fragment>
                            }
                        
                            <li className="nav-item">
                                <Link to='/about' className="nav-link mx-2 text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link text-white">Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/search' className='nav-link mx-2 text-white'>Search Data</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className='nav-link text-white'>Login</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;