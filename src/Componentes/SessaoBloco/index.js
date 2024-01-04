import Bloco from '../Bloco';
import './SessaoBloco.css';
import Form from '../Form';


console.log(Form.handler)

function SessaoBloco ({ listaProduto }) {
    return (
        <div>
        <section className='mainSection'>
            <ul>
                {listaProduto.map((produtos, index) => (
                        <Bloco key={index} img={produtos.img} titulo={produtos.titulo} empresa={produtos.empresa}/>
                ))}
            </ul>
        </section>
        </div>
    )
}

export default SessaoBloco;