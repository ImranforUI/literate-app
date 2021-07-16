import React from "react";
import aboutImage from '../../../assets/images/about.jpg';
import EducationCards from "./EducationCards";
import TeacherCards from "./TeacherCards";

let About = () => {
    return (
        <React.Fragment>
            <div className="container containerDiv mb-5">
                <div className="row my-5">
                    <div className="col text-center">
                        <p className="h1 text-info">About Us</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h3 className='display-4 font-weight-bold'>Who We Are?</h3>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='mt-3'>
                            <i className='fa fa-check text-success mr-2' /> Online/Offline Classrooms <br />
                            <i className='fa fa-check text-success mr-2 my-3' /> Personal Mentor Support <br />
                            <i className='fa fa-check text-success mr-2' />Lifetime Slack Chat Support <br />
                            <i className='fa fa-check text-success mr-2 mt-3' /> Job Placement Support
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={aboutImage} height='380' width='330' alt="" className='img-fluid' />
                    </div>
                </div>
                <EducationCards />
                <TeacherCards />
            </div>

        </React.Fragment>
    )
};
export default About;