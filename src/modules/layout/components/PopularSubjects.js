import React from 'react';
import s1 from '../../../assets/images/s1.jpg';
import s2 from '../../../assets/images/s2.jpg';
import s3 from '../../../assets/images/s3.jpg';

let PopularSubjects = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col">
                        <h3 className="display-4">Popular Subjects</h3>
                        <p className="lead">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
                    </div>
                </div>

                <section className='mt-3'>
                    <div className="card col-md-10 m-auto ">
                        <div className="row p-3">
                            <div className="col-md-5">
                                <img src={s1} alt="" className='img-fluid' />
                            </div>
                            <div className="col">
                                <p className="h4">Computer Sceince</p>
                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora ad facere tempore atque minima iusto labore et fugiat velit.</p>
                                <hr />
                                <i className='fa fa-graduation-cap'> 8 Courses</i>
                                <hr />
                                <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quo expedita aspernatur.</p>
                            </div>
                        </div>
                        <hr className='mt-0' />
                        <p className='text-center mb-2'>
                            <button className="btn btn-outline-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                More...
                            </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>
                </section>

                <section className=' my-3'>
                    <div className="card col-md-10 m-auto ">
                        <div className="row p-3">
                            <div className="col-md-5">
                                <img src={s2} alt="" className='img-fluid' />
                            </div>
                            <div className="col">
                                <p className="h4">Web Development</p>
                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora ad facere tempore atque minima iusto labore et fugiat velit.</p>
                                <hr />
                                <i className='fa fa-graduation-cap'> 16 Courses</i>
                                <hr />
                                <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quo expedita aspernatur.</p>
                            </div>
                        </div>
                        <hr className='mt-0' />
                        <p className='text-center mb-2'>
                            <button className="btn btn-outline-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                More...
                            </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>
                </section>

                <section className=' my-3'>
                    <div className="card col-md-10 m-auto ">
                        <div className="row p-3">
                            <div className="col-md-5">
                                <img src={s3} alt="" className='img-fluid' />
                            </div>
                            <div className="col">
                                <p className="h4">Data Sceince</p>
                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora ad facere tempore atque minima iusto labore et fugiat velit.</p>
                                <hr />
                                <i className='fa fa-graduation-cap'> 3 Courses</i>
                                <hr />
                                <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quo expedita aspernatur.</p>
                            </div>
                        </div>
                        <hr className='mt-0' />
                        <p className='text-center mb-2'>
                            <button className="btn btn-outline-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                More...
                            </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};
export default PopularSubjects;