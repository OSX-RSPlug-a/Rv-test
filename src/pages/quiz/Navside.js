 
import React from 'react'

import './styleqz.css';
import { ReactComponent as Logo } from './../../assets/logo/logo-greenthumb.svg';

export default function Navside() {
    return (
        <>
            <nav>

                <div class='wrap'>
                    <div class='label top-left'>
                        <div class='content'><hr></hr><Logo className="logo" /></div>
                    </div>
                </div>

            </nav>
        </>
    )
}