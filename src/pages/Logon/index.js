import React from 'react';

import './style.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
       <div class="logon-container">
           <section class="form">
            <img src={logoImg} alt="Logo"/>
           </section>

           <img src={heroesImg} alt="Heroes"/>
       </div>
    );
}