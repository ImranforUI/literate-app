import React from 'react';
import { Link } from 'react-router-dom';

let MainFooter = () => {
    return (
        <React.Fragment>
            <div className="container-fuild my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <i class="fas fa-edit fa-2x textLiterate"> Literate</i>
                            <p className="text-muted mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate nobis possimus inventore deserunt totam distinctio eum dolorum. Sed expedita reprehenderit cum similique ut iste enim voluptatem? Eaque, iste officiis.</p>
                            <i className='fa fa-phone fa-2x textLiterate'>  +91 0000000000</i> <br />
                            <i className='fa fa-clock fa-2x textLiterate mt-2'>  Mon - Sat 8.00 - 18.00</i> <br />
                            <i className='fa fa-envelope fa-2x textLiterate mt-2'> alex@gmail.com</i>
                        </div>
                        <div className="col-md-6 text-center">
                            <p className="h3 textLiterate">Company</p>
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <Link to={'/'} className='text-dark'> Home</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link to={'/about'} className='text-dark'> About Us</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link to={'/'} className='text-dark'> Courses Offered</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link to={'/contact'} className='text-dark'> Contact Us</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link to={'/'} className='text-dark'> Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col text-center">
                        <span>
                            <Link to='/facebook' className='text-dark'>
                                <i className='fa fa-facebook-f fa-1x' />
                            </Link>
                            <Link to='/linkedin' className='text-dark'>
                                <i className='fa fa-linkedin fa-1x mx-5' />
                            </Link>
                            <Link to='/twitter' className='text-dark'>
                                <i className='fa fa-twitter fa-1x' />
                            </Link>
                            <Link to='/google' className='text-dark'>
                                <i className='fa fa-google-plus fa-1x mx-5' />
                            </Link>
                            <Link to='/github' className='text-dark'>
                                <i className='fa fa-github fa-1x' />
                            </Link>
                        </span>

                        <p className="h6 text-muted mt-4">&copy; 2020 Litrate. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MainFooter;