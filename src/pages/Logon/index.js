import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './style.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
       <div class="logon-container">
           <section class="form">
            <img src={logoImg} alt="Logo"/>
              <form>
                  <h1>Faça o seu Logon</h1>

                  <input placeholder="Sua ID" />
                  <button type="submit" >Entrar</button>

                  <a href="/register">
                      <FiLogIn size={16} color="#E02041"/>
                      Não Tenho Cadastro
                  </a>

              </form>
           </section>

           <img src={heroesImg} alt="Heroes"/>
       </div>
    );
}