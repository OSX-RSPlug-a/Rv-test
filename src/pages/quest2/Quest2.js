import React from 'react'

import './../quiz/styleqz.css';

import Navside from './../quiz/Navside';

import  Wtrcn  from './../../assets/illustrations/wateringcan.png';

import   { ReactComponent as OneDrop }  from './../../assets/icons/green/one-drop.svg';

import   { ReactComponent as TwoDrops }  from './../../assets/icons/green/two-drops.svg';

import   { ReactComponent as ThreeDrops }  from './../../assets/icons/green/three-drops.svg';


export default function Quest2() {
    return (
        <>
            <Navside />

            <aside className="container">

                <img src={Wtrcn} className="wtrcn-top" alt="Sun top quiestion 2" />

                <h1>How often do you want to
                    <br/>water your plant?</h1>

                <div className="game">

                    <div className="options green">
                        
                        <OneDrop className="oneDrop" alt="Option 1" />
                
                        <p>Rarely</p>

                    </div>
   
                    <div className="options green">
                        
                        <TwoDrops className="twoDrops" alt="Option 2" /   >
                
                        <p>Regularly</p>

                    </div>

                    <div className="options green">
                        
                        <ThreeDrops className="threeDrops" alt="Option 3" />
                
                        <p>Daily</p>

                    </div>

                </div>

                <div className="cont-Navigation">

                    <a href="./../quiz/Quest1" className="prev-btn"><i className="material-icons">arrow_back</i><h3>Previous</h3></a>

                    <a href="./../quest3/Quest3" className="next-btn"><i className="material-icons">arrow_forward</i><h3>Next</h3></a>

                </div>

            </aside>
        </>
    )
}

  