import React from 'react'


let Home = () => {
    return (
        <React.Fragment>
            <div className='landingPage'>
                <div className="wrappper d-flex flex-column justify-content-center align-items-center h-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <h3 className="display-4">Lifelong Learning in the Age of Automation</h3>
                                <p className="lead">Start one of our 1000 high quality courses from the world’s leading experts today!</p>

                                <form className='form-inline'>
                                    <div className='form-group'>
                                        <input required type="search" size='30' className='form-control' placeholder='What do you want to learn here'  />
                                    </div>
                                    <div className='form-group'>
                                        <input type="submit" value='Get Started' className='btn btn-danger btn-sm' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Home;