import React from 'react'

import './../quiz/styleqz.css';

import Navside from './../quiz/Navside';

import  Dog  from './../../assets/illustrations/dog.png';

import   { ReactComponent as Pet }  from './../../assets/icons/coral/pet.svg';

import   { ReactComponent as Noanswer }  from './../../assets/icons/coral/no-answer.svg';



export default function Quest3() {
    return (
        <>
            <Navside />

            <aside className="container">

                <img src={Dog} className="wtrcn-top" alt="Sun top quiestion 2" />

                <h1>Do you have pets? 
                    <br/>Do they chew plants?</h1>

                    <h4>*We are asking because some plants can be toxic for your buddy.</h4>

                <div className="game">

                    <div className="options pets">
                        
                        <Pet className="pet" alt="Option 1" />
                
                        <p>Yes</p>

                    </div>
   
                    <div className="options pets">
                        
                        <Noanswer className="noanswer" alt="Option 2" /   >
                
                        <p>No/They don't care</p>

                    </div>

                </div>

                <div className="cont-Navigation">

                    <a href="/../quest2/Quest2" className="prev-btn"><i className="material-icons">arrow_back</i><h3>Previous</h3></a>

                    <a href="./../results" className="next-btn"><i className="material-icons">arrow_forward</i><h3>Finish</h3></a>

                </div>

            </aside>
        </>
    )
}