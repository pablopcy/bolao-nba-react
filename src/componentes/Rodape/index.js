import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="instagram.com/pablo.cysne" target='_blank'>
                            <img src="/imagens/ig.png" alt="logo instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="x.com/Pabl0PCysne" target='_blank'>
                            <img src="/imagens/tw.png" alt="logo twitter" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="logo bolao" />
            </section>
            <section>
                <p>
                    Desenvolvido por Pablo
                </p>
            </section>
        </footer>
    )
}

export default Rodape;