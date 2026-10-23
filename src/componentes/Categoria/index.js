import './Categoria.css';

const Categoria = (props) => {
    return (  
        <section className='categoria' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

export default Categoria;