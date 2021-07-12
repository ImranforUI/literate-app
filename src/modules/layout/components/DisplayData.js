import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchUserData } from '../../../redux/users/user.actions';
import { USERS_FEATURE_KEY } from '../../../redux/users/userReducer';


let DisplayData = () => {
    let dispatch = useDispatch();
    let userInfo = useSelector((state) => {
       return state[USERS_FEATURE_KEY];
    });

    useEffect(() => {
        dispatch(fetchUserData());
    },[dispatch]);
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(userInfo)}</pre> */}
            <div className="container containerDiv">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h3 text-info">Display User Data</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, reiciendis ut ipsam laboriosam distinctio sint iste autem. Dolorum tempora facere dicta amet quia et explicabo libero cum architecto cupiditate, obcaecati consequatur, ipsum, nesciunt perspiciatis asperiores blanditiis facilis saepe. Necessitatibus, sed.</p>
                    </div>
                </div>

                <div className="row animated slideInRight">
                    <div className="col">
                                    <table className='table table-hover table-striped text-center table-info'>
                                        <thead className='bg-info text-white'>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Profile</th>
                                            <th>Email</th>
                                            <th>Last Name</th>
                                            <th>Father Name</th>
                                            <th>Mother Name</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            userInfo.user.length > 0 ?
                                                <React.Fragment>
                                                    {
                                                        userInfo.user.map((user) => {
                                                            return(
                                                                <tr key={user._id}>
                                                                    <td>{user.firstName}</td>
                                                                    <td>
                                                                        <img src={user.image} alt="" width='25' height='25' className='img-fluid' />
                                                                    </td>
                                                                    <td>{user.email}</td>
                                                                    <td>{user.lastName}</td>
                                                                    <td>{user.fatherName}</td>
                                                                    <td>{user.motherName}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </React.Fragment> : null
                                        }
                                        </tbody>
                                    </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default DisplayData;
