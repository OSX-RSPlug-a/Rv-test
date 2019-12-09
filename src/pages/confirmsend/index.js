import React from 'react'

import './../choosensend/stylechsn.css';

import Navside from '../quiz/Navside';

import   { ReactComponent as Toxic }  from './../../assets/icons/grey/toxic.svg';
import Bunearscact  from './../../assets/plantpictures/bunny-ears-cacti.jpg';
import  Envelop  from './../../assets/illustrations/envelop.png';


export default function ConfSent() {
    return (
        <>

        <Navside />
        
        <aside className="send">

                <div class="cards">

                    <div className="head">

                        <h1>Bunny ears cacti</h1>

                        <h3>$5</h3>  

                        <Toxic className="toxic" alt="Toxic description" />

                    </div>

                    <img src={Bunearscact} className="pick-top" alt="Sun top quiestion 2" />                   

                </div>

                <div class="cards">

                    <div className="head">

                        <h1>Thank you!</h1>
    
                        <h3>You will hear from us soon.
                        <br/> Please check your e-mail!</h3>

                    </div>

                    <img src={Envelop} className="envelop" alt="Email sent" />

                </div>

            </aside>

        </>
    )
}
