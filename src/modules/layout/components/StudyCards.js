import React from 'react';
import Card1 from '../../../assets/images/s1.png';
import Card2 from '../../../assets/images/s2.png';
import Card3 from '../../../assets/images/s3.png';

let StudyCards = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col">
                        <h3 className="display-4">Why Study With Us?</h3>
                        <p className="lead">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={Card1} alt="" className='bg-white' />
                            <div className="card-body text-center">
                                <p className="h5">Learn Anything</p>
                                <p className="text-muted">Literacy is popularly understood as an ability to read, write and use numeracy in at least one method of writing. Build an online presence with this professional bootstrap 4 template.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-4">
                        <div className="card">
                            <img src={Card3} alt="" className='bg-white' />
                            <div className="card-body text-center">
                                <p className="h5">Learn With Experts</p>
                                <p className="text-muted">Literacy is popularly understood as an ability to read, write and use numeracy in at least one method of writing. Build an online presence with this professional bootstrap 4 template.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={Card2} alt="" className='bg-white' />
                            <div className="card-body text-center">
                                <p className="h5">Flexible Learning</p>
                                <p className="text-muted">Literacy is popularly understood as an ability to read, write and use numeracy in at least one method of writing. Build an online presence with this professional bootstrap 4 template.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default StudyCards;
