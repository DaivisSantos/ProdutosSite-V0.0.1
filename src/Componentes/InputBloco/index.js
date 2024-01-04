import './Input.css'

function Input (props) {
    return (
        <div className='containerForm'>
            <label className='labelForm'>{props.titulo}</label>
            <input className='inputForm' type='text' placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} />
        </div>
    )
}

export default Input;