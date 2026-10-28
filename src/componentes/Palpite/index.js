import './Palpite.css';

const Palpite = (props) => {
    return(
        <div className='palpite'>
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src="https://github.com/pablopcy.png" alt={props.texto} />
            </div>
            <div className='rodape'>
                <h4>{props.texto}</h4>
                <h5>{props.categoria}</h5>
            </div>
        </div>
    )
}

export default Palpite;