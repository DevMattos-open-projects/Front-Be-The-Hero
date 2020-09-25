import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
              <section>
              <img src={logoImg} alt="Logo"/>
              <h1>Cadastro</h1>
              <p>Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
              <Link className="back-link" to="/">
                      <FiArrowLeft size={16} color="#E02041"/>
                      Não Tenho Cadastro
                  </Link>
              </section>
              
              <form>

              </form>
            </div>
        </div>
    )
}