import React from 'react'
import StudyCards from './StudyCards'
import PopularSubjects from './PopularSubjects'
import StudentReview from './StudentsReview';
import FeaturedCourses from './FeaturedCourses';


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
                                        <input required type="search" size='30' className='form-control' placeholder='What do you want to learn here' />
                                    </div>
                                    <div className='form-group'>
                                        <input type="submit" value='Get Started' className='btn btn-outline-success btn-sm' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StudyCards />
            <PopularSubjects />
            <StudentReview />
            <FeaturedCourses />
        </React.Fragment>
    )
};
export default Home;