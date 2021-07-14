import React from 'react';
import {Link} from 'react-router-dom';

let MainFooter = () => {
    return(
        <React.Fragment>
            <div className="container-fuild mt-3">
               <div className="container">
               <div className="row">
                    <div className="col-md-6">
                    <i class="fas fa-edit fa-2x textLiterate"> Literate</i> 
                    <p className="text-muted mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate nobis possimus inventore deserunt totam distinctio eum dolorum. Sed expedita reprehenderit cum similique ut iste enim voluptatem? Eaque, iste officiis.</p>
                    <i className='fa fa-phone fa-2x textLiterate'>  +91 9700148476</i> <br />
                    <i className='fa fa-clock fa-2x textLiterate mt-2'>  Mon - Sat 8.00 - 18.00</i> <br />
                    <i className='fa fa-envelope fa-2x textLiterate mt-2'> itstudio@masarrati.com</i> 
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
            </div>
        </React.Fragment>
    )
};

export default MainFooter;