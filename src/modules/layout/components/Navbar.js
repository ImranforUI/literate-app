import React from 'react';

let Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg scrolling-navbar bg-dark fixed-top">
                <div className="container">
                    <a href="#" className='navbar-brand'>
                        <i class="fas fa-edit fa-2x text-white"> Literate</i>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#"> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>

                </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;