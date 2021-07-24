import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from '../../../redux/users/user.actions';
import { USERS_FEATURE_KEY } from '../../../redux/users/userReducer';


let SearchData = () => {
    let dispatch = useDispatch();
    let userInfo = useSelector((state) => {
        return state[USERS_FEATURE_KEY];
    });

    let [selected, setSelected] = useState({});

    let [email, setEmail] = useState('');

    let [gotData, setGotData] = useState(false);



    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);
    // Search USer
    let searchUser = (e) => {
        e.preventDefault();
        let i = 0;
        while (i < userInfo.users.length) {
            if (userInfo.users[i].email === email) {
                setSelected(userInfo.users[i]);
                setGotData(true);
            }
            i++;
        }
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
                {/* <p>{JSON.stringify(selected)}</p> */}
                {/* <pre>Searched Data {JSON.stringify(selected[0])}</pre> */}

                <div className="card animated slideInRight">
                    <div className="card-header bg-info text-white">
                        <p className="h4">Search user by Email</p>
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
                    gotData == true ?
                        <React.Fragment>
                            <div className="col mt-3 animated slideInLeft">
                                <p className="h4 text-info">Your Profile</p>
                            </div>
                            <div className="row mt-2 animated slideInRight">
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={selected.image} alt="" className='img-fluid' />
                                        <div className="card-body">
                                            <p className="h5">Name : {selected.firstName} {selected.lastName}</p>
                                            <p className="h6">Email : {selected.email}</p>
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
                                                    First Name : {selected.firstName}
                                                </li>
                                                <li className="list-group-item">
                                                    Email : {selected.email}
                                                </li>
                                                <li className="list-group-item">
                                                    Last Name : {selected.lastName}
                                                </li>
                                                <li className="list-group-item">
                                                    Father Name : {selected.fatherName}
                                                </li>
                                                <li className="list-group-item">
                                                    Mother Name : {selected.motherName}
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