import './Bloco.css'

function Bloco (props) {
    return (
        <div className='blocoContent'>
            <div className='contentImg'>
                <img src={props.img} alt='produto' />
            </div>
            <div className='blocoText'> 
                <h2>{props.titulo}</h2>
                <p>{props.empresa}</p>
            </div>
        </div>
    )
}

export default Bloco;