import React from 'react'
//import { Link } from 'react-router-dom';

import './styleqz.css';

import  Suny  from './../../assets/illustrations/sun.png';

import   { ReactComponent as HgSunLigh }  from './../../assets/icons/coral/high-sun.svg';

import   { ReactComponent as LgSunLigh }  from './../../assets/icons/coral/low-sun.svg';

import   { ReactComponent as NoSunLigh }  from './../../assets/icons/coral/no-answer.svg';


export default function Quest1() {
    return (
        <>
           <aside className="container">

                <img src={Suny} className="suny-top" alt="Sun top quiestion 1" />

                <h1>First, set the amount of 
                    <br/><bold>sunlight</bold> your plant will get.</h1>

                <div className="game">

                    <div className="options light">
                        
                        <HgSunLigh className="hgSunLigh" alt="Option 1" />
                
                        <p>High sunlight</p>

                    </div>
   
                    <div className="options light">
                        
                        <LgSunLigh className="lgSunLigh" alt="Option 2" />
                
                        <p>Low sunlight</p>

                    </div>

                    <div className="options light">
                        
                        <NoSunLigh className="noSunLigh" alt="Option 3" />
                
                        <p>No sunlight</p>

                    </div>

                </div>

                <div className="cont-Navigation">

                    <a href="./../MainPage/" className="prev-btn"><i className="material-icons">arrow_back</i><h3>Home</h3></a>

                    <a href="./../quest2/Quest2" className="next-btn"><i className="material-icons">arrow_forward</i><h3>Next</h3></a>

                </div>

            </aside>
        </>
    )
}

//<Link to="./../" className="prev-btn"></Link>
//<Link to="./../quest2/Quest2" className="next-btn"></Link>