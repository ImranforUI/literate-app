import React from 'react';
import './App.css';
import Navbar from './modules/layout/components/Navbar';
import Home from './modules/layout/components/Home';
import StudyCards from './modules/layout/components/StudyCards';
import PopularSubjects from './modules/layout/components/PopularSubjects';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';



let App = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Home/>
            <StudyCards/>
            <PopularSubjects/>
        </React.Fragment>
    )
};
export default App;
