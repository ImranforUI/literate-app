import React from 'react';
import { Link } from 'react-router-dom';

let MainFooter = () => {
    return (
        <React.Fragment>
            <div className="container-fuild mt-4 bg-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <i class="fas fa-edit fa-2x "> Literate</i>
                            <p className=" mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate nobis possimus inventore deserunt totam distinctio eum dolorum. Sed expedita reprehenderit cum similique ut iste enim voluptatem? Eaque, iste officiis.</p>
                            <i className='fa fa-phone fa-2x '>  +91 0000000000</i> <br />
                            <i className='fa fa-clock fa-2x  mt-2'>  Mon - Sat 8.00 - 18.00</i> <br />
                            <i className='fa fa-envelope fa-2x  mt-2'> alex@gmail.com</i>
                        </div>
                        <div className="col-md-6 text-center">
                            <p className="h3 mt-3 ">Company</p>
                            <div className='mt-3'>
                                <Link to={'/'} className='text-white'> Home</Link>
                            </div>
                            <div className='mt-3'>
                                <Link to={'/about'} className='text-white'> About Us</Link>
                            </div>
                            <div  className='mt-3'>
                                <Link to={'/'} className='text-white'> Courses Offered</Link>
                            </div>
                            <div  className='mt-3'>
                                <Link to={'/contact'} className='text-white'> Contact Us</Link>
                            </div>
                            <div  className='mt-3'>
                                <Link to={'/'} className='text-white'> Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col text-center">
                        <span>
                            <Link to='/facebook' className='text-white'>
                                <i className='fa fa-facebook-f fa-1x' />
                            </Link>
                            <Link to='/linkedin' className='text-white'>
                                <i className='fa fa-linkedin fa-1x mx-5' />
                            </Link>
                            <Link to='/twitter' className='text-white'>
                                <i className='fa fa-twitter fa-1x' />
                            </Link>
                            <Link to='/google' className='text-white'>
                                <i className='fa fa-google-plus fa-1x mx-5' />
                            </Link>
                            <Link to='/github' className='text-white'>
                                <i className='fa fa-github fa-1x' />
                            </Link>
                        </span>

                        <p className="h6 text-white mt-3">&copy; 2020 Litrate. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MainFooter;