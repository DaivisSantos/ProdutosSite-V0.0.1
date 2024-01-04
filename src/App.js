import React, { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner';
import Form from './Componentes/Form';
import SessaoBloco from './Componentes/SessaoBloco';

function App() {
  const [Lista, setLista] = useState([])

  const atualizaLista = (novaLista) => {
    setLista(novaLista)
  }

  return (
    <div className="App">
        <Banner />
        <section className='SectionApp'>
        <SessaoBloco listaProduto={Lista}/>
        <Form atualizaLista={atualizaLista}/>
        </section>
    </div>
  );
}

export default App;
