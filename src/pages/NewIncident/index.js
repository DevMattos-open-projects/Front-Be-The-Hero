import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import './styles.css';
export default function NewIncident (){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
    return(  
    <div className="new-incident-container">
    <div className="content">
      <section>
      <img src={logoImg} alt="Logo"/>
      <h1>Cadastrar novo caso</h1>
      <p>Descrevar o caso detalhadamente para encontrar um herói para resolver isso.</p>
      <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#E02041"/>
              Volta para HOME
          </Link>
      </section>

      <form>
      <input placeholder="Titulo do caso" />
      <textarea placeholder="Descrição" />
      <input placeholder="Valor em Reais" />

     
      <button className="button" type="submit"> Cadastrar</button>
      </form>
    </div>
</div>)
}