import React from 'react';
import s1 from '../../../assets/images/s1.jpg';
import s2 from '../../../assets/images/s2.jpg';
import s3 from '../../../assets/images/s3.jpg';
import s4 from '../../../assets/images/s4.jpg';
import s5 from '../../../assets/images/s5.jpg';
import s6 from '../../../assets/images/s6.jpg';

let FeaturedCourses = () => {
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row text-center">
                    <div className="col">
                        <h3 className="display-4">Featured Courses</h3>
                        <p className="lead">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam</p>
                    </div>
                </div>
            </div>

            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <a className="btn btn-outline-success mb-3 mr-1 btn-sm" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            <a className="btn btn-outline-success mb-3 btn-sm" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-12">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src={s1} />
                                                    <div className="card-body">
                                                        <div className='text-center'>
                                                            <button className='btn btn-success btn-sm mt-0'>$49.34</button>
                                                        </div>
                                                        <p className="badge badge-success badge-pill">Computer Science</p>
                                                        <h4 className="card-title">Learning To Write as a Professional Author</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src={s2} />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src={s3} />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src={s4} />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="" src={s5} />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src={s6} />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default FeaturedCourses;