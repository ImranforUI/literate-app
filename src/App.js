import React from 'react';
import './App.css';
import Navbar from './modules/layout/components/Navbar';
import Home from './modules/layout/components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './modules/layout/components/Form';
import SearchData from './modules/layout/components/SearchData';
import DisplayData from './modules/layout/components/DisplayData';
import Login from './modules/layout/components/Login';
import About from './modules/layout/components/About';
import Contact from './modules/layout/components/Contact';
import MainFooter from './modules/layout/components/MainFooter';



let App = () => {
    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/about'} component={About} />
                    <Route exact path={'/contact'} component={Contact} />
                    <Route exact path={'/register'} component={Form}/>
                    <Route exact path={'/search'} component={SearchData}/>
                    <Route exact path={'/display'} component={DisplayData}/>
                    <Route exact path={'/login'} component={Login}/>
                </Switch>
                <MainFooter/>
            </Router>
        </React.Fragment>
    )
};
export default App;
