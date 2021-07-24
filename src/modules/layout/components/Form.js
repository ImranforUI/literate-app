import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";

import { useHistory } from 'react-router-dom';
import { registerUser } from '../../../redux/users/user.actions';

let Form = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        fatherName: '',
        motherName: '',
        image: '',
        password: ''
    });

    // Handle Inputs
    let handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // Handle Image File
    let changeImage = (e) => {
        let imageFile = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                setUser({
                    ...user,
                    image: reader.result
                })
            }
            else {
                alert('Error Occurred');
            }
        });
    };

    // Submit User
    let submitUser = (e) => {
        e.preventDefault();
        console.log(user);
        dispatch(registerUser(user, history));
    };
    return (
        <React.Fragment>
            <div className="container containerDiv mb-5">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h3 text-info">Please Fill in the Details</p>
                        <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi libero velit blanditiis voluptates quisquam quo nihil dolore minima provident, beatae non? Magnam quia commodi labore sequi voluptates totam, voluptatibus sapiente ex sint doloribus fuga, similique rerum blanditiis libero asperiores.</p>
                    </div>
                </div>
                {/* <pre>{JSON.stringify(user)}</pre> */}
                <div className="col-md-4 animated slideInRight">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            <p className="h4">Registration Here</p>
                        </div>
                        <div className="card-body bg-light">
                            <form onSubmit={submitUser}>
                                <div className="form-group">
                                    <input
                                        name='firstName'
                                        value={user.firstName}
                                        onChange={handleInput}
                                        type="text" className='form-control' placeholder='First Name' />
                                </div>
                                <div className="form-group">
                                    <input
                                        name='lastName'
                                        value={user.lastName}
                                        onChange={handleInput}
                                        type="text" className='form-control' placeholder='Last Name' />
                                </div>

                                <div className="form-group">
                                    <input
                                        name='email'
                                        value={user.email}
                                        onChange={handleInput}
                                        type="text" className='form-control' placeholder='Email' />
                                </div>

                                <div className="form-group">
                                    <input
                                        name='password'
                                        value={user.password}
                                        onChange={handleInput}
                                        type="password" className='form-control' placeholder='Password' />
                                </div>
                                <div className="form-group">
                                    <input
                                        name='fatherName'
                                        value={user.fatherName}
                                        onChange={handleInput}
                                        type="text" className='form-control' placeholder='Father Name' />
                                </div>
                                <div className="form-group">
                                    <input
                                        name='motherName'
                                        value={user.motherName}
                                        onChange={handleInput}
                                        type="text" className='form-control' placeholder='Mother Name' />
                                </div>
                                <div className="form-group">
                                    <div className="custom-file">
                                        <input
                                            onChange={changeImage}
                                            type="file" className="custom-file-input" id="customFile" />
                                        <label className="custom-file-label" htmlFor="customFile">Upload Image</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className='btn btn-sm btn-info' value='Register' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Form;