import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {

  const [erro, setErro] = useState('');

  const [categoria, setCategoria] = useState('');

  const tipoNome = categoria === "Campeão" ? "Equipe" : categoria === "Coach of the Year" ? "Treinador" : "Atleta"; 

  const [texto, setTexto] = useState('');

const aoSalvar = (evento) => {
  evento.preventDefault();

  const mensagemErro = props.aoPalpiteCadastrado({
    categoria,
    texto,
  });

  setErro(mensagemErro);

  if (mensagemErro) {
    return;
  }

  setCategoria('');
  setTexto('');
};

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Bolão NBA 2026/27 {'\u{1F3C0}'}</h2>
        <ListaSuspensa 
          obrigatorio={true} 
          label="Categoria" 
          placeholder="Escolha uma categoria"
          itens={props.categorias} 
          valor={categoria} 
          aoAlterado={valor => {
            setCategoria(valor); 
            setErro('');
          }}
          />
        <CampoTexto 
          obrigatorio={true} 
          label={tipoNome} 
          placeholder="Digite aqui..." 
          valor={texto} 
          aoAlterado={valor => setTexto(valor)} 
          erro={erro}
          />
        
        <Botao>
          Adicionar Palpite
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
