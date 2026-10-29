import Palpite from '../Palpite';
import './Categoria.css';

const Categoria = (props) => {
    return (
        props.palpites.length > 0 && (
            <section className="categoria">
                <div className="palpites">
                    {props.palpites.map((palpite, indice) => {
                        const categoria = props.categorias.find(
                            item => item.nome === palpite.categoria
                        );

                        return (
                            <Palpite
                                key={indice}
                                corDeFundo={categoria?.corPrimaria}
                                texto={palpite.texto}
                                categoria={palpite.categoria}
                            />
                        );
                    })}
                </div>
            </section>
        )
    );
};

export default Categoria;