import Palpite from '../Palpite';
import './Categoria.css';

const Categoria = (props) => {
    return (  
        (props.palpites.length > 0) ? <section className='categoria' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='palpites'>
                {props.palpites.map( palpite => <Palpite corDeFundo={props.corPrimaria} key={palpite.texto} texto={palpite.texto} categoria={palpite.categoria}/> )}
            </div>
        </section>
        : ''
    )
}

export default Categoria;