import React, { useState } from 'react';
import Input from '../InputBloco';
import Botao from '../botao';
import './Form.css'

function Form ({ atualizaLista }) {
    const [NomeProduto, setNomeProduto] = useState('');
    const [PublisherProduto, setPublisherProduto] = useState('');
    const [EnderecoImagem, setEnderecoImagem] = useState('');

    const handlerNomeProduto = (valor) => {
        setNomeProduto(valor);
    }

    const handlerPublisherProduto = (valor) => {
        setPublisherProduto(valor);
    }

    const handlerEnderecoImagem = (valor) => {
        setEnderecoImagem(valor);
    }

    const hanlderSubmit = (Event) => {
        Event.preventDefault();
        console.log(NomeProduto, PublisherProduto, EnderecoImagem)

        const novoProduto = {
            titulo: NomeProduto,
            empresa: PublisherProduto,
            img: EnderecoImagem
        }

        atualizaLista((prevLista) => [...prevLista, novoProduto]);
        
    }

    return (
        <section className='FormSection'>
            <form className='Form' onSubmit={hanlderSubmit}>
            <h1>Insira os Dados do produto</h1>
            <Input titulo='Nome do Produto' placeholder='insira o Nome do produto' onChange={handlerNomeProduto}/>
            <Input titulo='Preço do Produto' placeholder='insira o Nome da publisher' onChange={handlerPublisherProduto}/>
            <Input titulo='Endereço da Imagem' placeholder='insira o Nome do endereço da imagem do produto' onChange={handlerEnderecoImagem}/>
            <Botao />
            </form>
        </section>
    )
}

export default Form;