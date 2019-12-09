import React from 'react'

import './stylechsn.css';

import Navside from '../quiz/Navside';

import   { ReactComponent as Toxic }  from './../../assets/icons/grey/toxic.svg';
import Bunearscact  from './../../assets/plantpictures/bunny-ears-cacti.jpg';


export default function SendPick() {
    return (
        <>

        <Navside />
        
        <aside className="send">

                <div class="cards2">

                    <div className="head">

                        <h1>Bunny ears cacti</h1>

                        <h3>$5</h3> 

                        <Toxic className="toxic" alt="Toxic description" />

                    </div>

                    <img src={Bunearscact} className="picked-top" alt="Sun top quiestion 2" /> 

                </div>

                <div class="cards2">

                    <div className="head">

                        <h1>Nice pick!</h1>

                        <h3>Tell us your name and e-mail
                            <br/>and we will get in touch
                            <br/>regarding your order ;)</h3>

                    </div>

                    <form method="post">

                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Crazy plant person" required />

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="plant.person@mail.com" required />

                        <button class="ent">Send</button>

                    </form>

                </div>

            </aside>

        </>
    )
}
