import React from 'react'

import './styleres.css';

import Navside from './../quiz/Navside';

import  Pick  from './../../assets/illustrations/pick.png';

import   { ReactComponent as Toxic }  from './../../assets/icons/grey/toxic.svg';

import Bunearscact  from './../../assets/plantpictures/bunny-ears-cacti.jpg';


export default function Results() {
    return (
        <>
        
            <Navside />

            <aside>

                <img src={Pick} className="pick-top" alt="Sun top quiestion 2" />

                <h1 className="top-h1">Our picks for you</h1>

                <div className="res">

                    <div class="cards">

                        <img src={Bunearscact} className="pick-top" alt="Sun top quiestion 2" />

                        <h1>test</h1>
                        
                        <h3>$5 <Toxic className="toxic" alt="Toxic description" /></h3>  
                        
                        <button>Buy now</button>

                    </div>


                    <div class="cards">

                        <img src={Bunearscact} className="pick-top" alt="Sun top quiestion 2" />

                        <h1>test</h1>

                        <h3>$5 <Toxic className="toxic" alt="Toxic description" /></h3>  
                        
                        <button>Buy now</button>

                    </div>

                    <div class="cards">

                        <img src={Bunearscact} className="pick-top" alt="Sun top quiestion 2" />
                        
                        <h1>test</h1>
                        
                        <h3>$5 <Toxic className="toxic" alt="Toxic description" /></h3>  

                        <button>Buy now</button>

                    </div>


                    <div class="cards">

                        <img src={Bunearscact} className="pick-top" alt="Sun top quiestion 2" />

                        <h1>test</h1>
                        
                        <h3>$5 <Toxic className="toxic" alt="Toxic description" /></h3>  

                        <button>Buy now</button>

                    </div>

                    <div class="cards">

                        <img src={Bunearscact} className="pick-top" alt="Sun top quiestion 2" />

                        <h1>test</h1>
                        
                        <h3>$5 <Toxic className="toxic" alt="Toxic description" /></h3>  

                        <button>Buy now</button>

                    </div>


                    <div class="cards">

                        <img src={Bunearscact} className="pick-top" alt="Sun top quiestion 2" />

                        <h1>test</h1>
                        
                        <h3>$5 <Toxic className="toxic" alt="Toxic description" /></h3>  

                        <button>Buy now</button>

                    </div>


                </div>

            </aside>

        </>
    )
}