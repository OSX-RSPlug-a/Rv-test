import React from 'react'
//import { Link } from 'react-router-dom';

import './stylemainpg.css';

import { ReactComponent as Logo } from './../../assets/logo/logo-greenthumb.svg';
import  Logocomp  from './../../assets/illustrations/illustration-home.png';
import Logocompmob from './../../assets/illustrations/illustration-home-mobile.png';

//<Link to="Quiz"></Link>
export default function MainPage() {
    return (
        <>
            <header className="test"> 

                <aside className="block-1">

                    <Logo className="logo" />

                    <h1>Find your<br/>
                    next green 
                    <br/>friend</h1>

                    <a href="quiz" className="main-btn"><i className="material-icons">arrow_forward</i><h3>Start Quiz</h3></a>
                    
                </aside>

                <aside className="block-2">

                    <img src={Logocomp} className="logo-comp" alt="Logo composition" />

                    <img src={Logocompmob} className="logo-comp-mob" alt="Logo composition mobile" />

                </aside>

            </header>

        </>
    )
}