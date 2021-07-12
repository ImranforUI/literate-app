import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { loginUser } from '../../../redux/users/user.actions';


let Login = () => {
    let history = useHistory()
    let dispatch = useDispatch();
    let [admin , setAdmin] = useState({
        id : '',
        password : ''
    });

    let handleInput = (e) => {
      setAdmin({
          ...admin,
          [e.target.name] : e.target.value
      })
    };

    let submitLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(admin , history));
    };
    return (
        <React.Fragment>
            <div className="container containerDiv">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h3 text-info">Login Here</p>
                        <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatibus. Magni voluptate commodi deleniti consequuntur ipsam incidunt omnis aliquid libero unde enim. Illum assumenda nihil alias adipisci corporis eligendi a!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="card animated jello">
                            <div className="card-header bg-info text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitLogin}>
                                    <div className="form-group">
                                        <input
                                        name="id"
                                        value={admin.id}
                                        onChange={handleInput}
                                        type="text" placeholder="Admin ID Here" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                          name="password"
                                          value={admin.password}
                                          onChange={handleInput}
                                        type="password" placeholder="Password" className="form-control"/>
                                    </div>
                                    <input type="submit" className="btn btn-sm btn-info" value="Login"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Login;