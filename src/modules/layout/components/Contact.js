import React from "react";

let Contact = () => {
    return (
        <React.Fragment>
            <div className="container containerDiv">
                <div className="row">
                    <div className="col text-center">
                        <p className="h1 textLiterate">Contact Here</p>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-md-6">
                        <p className="h1 font-weight-bold">Get in touch!</p>
                        <p className="h5 text-muted mt-3">Hi there, We are available 24/7 by fax, e-mail or by phone. Drop us line so we can talk futher about that.</p>
                        <p className="h5 mt-3">Email : </p>
                        <p className="h6 text-muted">itstudio@masarrati.com</p>
                        <p className="h5 mt-3">Visit Us: : </p>
                        <p className="h6 text-muted">91Springboard, Madhapur, Hitech City, Hyderabad, Telangana</p>
                        <p className="h5 mt-3">Contact Us: : </p>
                        <p className="h6 text-muted">+91 9700148476</p>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input required type="text" className='form-control p-4' placeholder='Your Name*' />
                                </div>
                                <div className="form-group mt-4">
                                    <input required type="email" className='form-control p-4' placeholder='Your Email*' />
                                </div>
                                <div className="form-group mt-4">
                                    <input required type="text" className='form-control p-4' placeholder='Subject*' />
                                </div>
                                <div className="form-group">
                                    <textarea rows="5" className='form-control p-4' placeholder='Type Your Text Here*'></textarea>
                                </div>

                                <div className="form-group mt-4 text-right">
                                    <input required type="submit" className='btn btn-lg btn-pill text-white btnLiterate' value='Send Message' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Contact;