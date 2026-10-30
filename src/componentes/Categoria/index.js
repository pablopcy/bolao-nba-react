import Palpite from '../Palpite';
import './Categoria.css';

const Categoria = (props) => {
    return (
        props.palpites.length > 0 && (
            <section className="categoria">
                <div className="palpites">
                    {props.palpites.map((palpite) => {
                        const categoria = props.categorias.find(
                            item => item.nome === palpite.categoria
                        );

                        return (
                            <Palpite
                                key={palpite.id}
                                corDeFundo={categoria?.corPrimaria}
                                emoji={categoria?.emoji}
                                texto={palpite.texto}
                                categoria={palpite.categoria}
                                aoExcluir={() => props.aoExcluir(palpite.id)}
                            />
                        );
                    })}
                </div>
            </section>
        )
    );
};

export default Categoria;