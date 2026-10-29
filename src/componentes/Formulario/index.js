import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {

  const [categoria, setCategoria] = useState('');

  const tipoNome = categoria === "Campeão" ? "Equipe" : categoria === "Coach of the Year" ? "Treinador" : "Atleta"; 

  const [texto, setTexto] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoPalpiteCadastrado({
      categoria,
      texto,
    })
    setCategoria('');
    setTexto('');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Bolão NBA 2026/27</h2>
        <ListaSuspensa 
          obrigatorio={true} 
          label="Categoria" 
          placeholder="Escolha uma categoria"
          itens={props.categorias} 
          valor={categoria} 
          aoAlterado={setCategoria}
          />
        <CampoTexto 
          obrigatorio={true} 
          label={tipoNome} 
          placeholder="Digite aqui..." 
          valor={texto} 
          aoAlterado={valor => setTexto(valor)} 
          />
        <CampoTexto 
          label="Imagem" 
          placeholder="Informe o endereço da imagem..." 
          />
        
        <Botao>
          Adicionar Palpite
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
