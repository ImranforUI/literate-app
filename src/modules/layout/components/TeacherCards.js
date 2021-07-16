import React from 'react';
import team1 from '../../../assets/images/team1.jpg';
import team2 from '../../../assets/images/team2.jpg';
import team3 from '../../../assets/images/team3.jpg';
import team4 from '../../../assets/images/team4.jpg';

let TeacherCards = () => {
    return (
        <React.Fragment>
            <div className="row text-center mt-5">
                <div className="col">
                    <h3 className="display-4">Meet Our Skilled Teachers</h3>
                    <p className="lead">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="card hover">
                        <img src={team1} alt="" height='237' width='255' />
                        <div className="card-body">
                            <p className="h4 textLiterate">Max Stoiber</p>
                            <p className="h5 lead">Founder & CEO</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={team2} alt="" height='237' width='255' />
                        <div className="card-body">
                            <p className="h4 textLiterate">Dhony Abraham</p>
                            <p className="h5 lead">Managing Partner</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={team3} alt=""  height='237' width='255' />
                        <div className="card-body">
                            <p className="h4 textLiterate">Marko Dugonji</p>
                            <p className="h5 lead">Cheif Executive</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={team4} alt="" height='237' width='255' />
                        <div className="card-body">
                            <p className="h4 textLiterate">Rhoda Byrd</p>
                            <p className="h5 lead">Technology Officer</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TeacherCards;