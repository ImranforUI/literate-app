import React, {useEffect} from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchUserData } from '../../../redux/users/user.actions';
import { USERS_FEATURE_KEY } from '../../../redux/users/userReducer';


let SearchData = () => {
    let dispatch = useDispatch();
    let userInfo = useSelector((state) => {
       return state[USERS_FEATURE_KEY];
    });

    let [selected, setSelected] = useState([]);

    let [email, setEmail] = useState('');



    useEffect(() => {
       dispatch(fetchUserData());
    },[dispatch]);
    // Search USer
    let searchUser = (e) => {
        e.preventDefault();

        let selectedEmail = email;
        let selectedUser = userInfo.user.filter((user) => {
            return user.email === selectedEmail;
        });
        setSelected(selectedUser);

        console.log(selectedUser);
    };

    return (
        <React.Fragment>
            <div className="container containerDiv">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h3 text-info">Search User</p>
                        <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate voluptate dicta quam neque dolore, fuga, eum esse numquam aut fugiat soluta autem possimus, ipsam tempora aliquam eos? Excepturi quidem, tempora, aliquid temporibus velit autem cupiditate laboriosam animi quas tenetur repellendus.</p>
                    </div>
                </div>
                 {/*<pre>{JSON.stringify(userInfo)}</pre>*/}
                {/* <pre>Searched Data {JSON.stringify(selected[0])}</pre> */}

                <div className="card animated slideInRight">
                    <div className="card-header bg-info text-white">
                        <p className="h4">Search User Here</p>
                    </div>
                    <div className="card-body">
                        <form className='form-inline' onSubmit={searchUser}>
                            <div className="form-group">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="search" size='40' className='form-control' placeholder='Enter Your Email Here' />
                            </div>
                            <div className="form-group">
                                <input type="submit" className='btn btn-sm btn-info' value='Search' />
                            </div>
                        </form>
                    </div>
                </div>

                {
                     selected.length > 0 ?
                        <React.Fragment>
                            <div className="col mt-3 animated slideInLeft">
                                <p className="h4 text-info">Your Profile</p>
                            </div>
                            <div className="row mt-2 animated slideInRight">
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={selected[0].image} alt="" className='img-fluid' />
                                        <div className="card-body">
                                            <p className="h5">Name : {selected[0].firstName} {selected[0].lastName}</p>
                                            <p className="h6">Email : {selected[0].email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="card">
                                        <div className="card-header bg-info text-white">
                                            <p className="h4">Information</p>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className='list-group-item'>
                                                    First Name : {selected[0].firstName}
                                                </li>
                                                <li className="list-group-item">
                                                    Email : {selected[0].email}
                                                </li>
                                                <li className="list-group-item">
                                                    Last Name : {selected[0].lastName}
                                                </li>
                                                <li className="list-group-item">
                                                    Father Name : {selected[0].fatherName}
                                                </li>
                                                <li className="list-group-item">
                                                    Mother Name : {selected[0].motherName}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment> : null
                }
            </div>
        </React.Fragment>
    )
};
export default SearchData;