import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const elenco = [
    'Coach',
    'Starting Lineup',
    'Point Guard',
    'Shooting Guard',
    'Small Forward',
    'Power Forward',
    'Center',
    'Sixth Man'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault();
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome..." />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo..." />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem..." />
        <ListaSuspensa obrigatorio={true} label="Elenco" itens={elenco}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
