import React from 'react';
import team1 from '../../../assets/images/team1.jpg';
import team2 from '../../../assets/images/team2.jpg';
import team3 from '../../../assets/images/team3.jpg';
import team4 from '../../../assets/images/team4.jpg';
import { Link } from 'react-router-dom';

let StudentsReview = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col">
                        <h3 className="display-4">What our Student Saying</h3>
                        <p className="lead">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 m-auto">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="card literate-hover border-rounded">
                                <div class="carousel-inner">
                                    <div className="row p-5">
                                        <div className="carousel-item active">
                                            <div className="row text-center">
                                                <div className="col-md-8 text-left ">
                                                    <i className='fa fa-quote-left fa-3x text-muted'></i>
                                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque sapiente numquam ipsa minima facilis fugit delectus laboriosam vero reiciendis exercitationem eligendi, labore, consectetur adipisci accusamus facere quae officia debitis!</p>
                                                    <p className="h5">Oliver Bradly <span className='text-muted small'> - United Kingdom</span></p>
                                                </div>
                                                <div className="col-md-3 d-flex flex-coloumn justify-content-end align-items-end">
                                                    <img src={team1} alt="" className='img-fluid rounded-circle' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <i className='fa fa-quote-left fa-3x text-muted'></i>
                                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eos similique eum tenetur illo tempora dolore delectus suscipit culpa velit, impedit iste ducimus voluptate! Dolor.</p>
                                                    <p className="h5">William James <span className='text-muted small'> - United State</span></p>
                                                </div>
                                                <div className="col-md-3 d-flex flex-coloumn justify-content-end align-items-end">
                                                    <img src={team2} alt="" className='img-fluid rounded-circle' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <i className='fa fa-quote-left fa-3x text-muted'></i>
                                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eos similique eum tenetur illo tempora dolore delectus suscipit culpa velit, impedit iste ducimus voluptate! Dolor.</p>
                                                    <p className="h5">Isebella Mia <span className='text-muted small'> - United State</span></p>
                                                </div>
                                                <div className="col-md-3 d-flex flex-coloumn justify-content-end align-items-end">
                                                    <img src={team3} alt="" className='img-fluid rounded-circle' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <i className='fa fa-quote-left fa-3x text-muted'></i>
                                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eos similique eum tenetur illo tempora dolore delectus suscipit culpa velit, impedit iste ducimus voluptate! Dolor.</p>
                                                    <p className="h5">Benjamin Lucas <span className='text-muted small'> - Sweden</span></p>
                                                </div>
                                                <div className="col-md-3 d-flex flex-coloumn justify-content-end align-items-end">
                                                    <img src={team4} alt="" height='178px' width='191px' className='rounded-circle' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="learning-path-bg p-5">
                    <div className="wrapper-bg d-flex flex-column justify-content-center align-items-center">
                        <p className="h3 display-4 font-weight-bold">Find the right learning path for you</p>
                        <p className="lead">Match your goals to our programs, explore your options and map out your path to success.</p>
                        <Link to='/' className='btn btn-join btn-lg text-dark mt-5'>Join Us</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default StudentsReview;
