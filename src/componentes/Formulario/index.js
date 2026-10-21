import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = () => {

  const categorias = [
    'Campeão',
    'MVP',
    'Finals MVP',
    'Defensive Player of the Year',
    'Rookie of the Year',
    'Clutch Player of the Year',
    'Sixth Man of the Year',
    'Most Improved Player',
    'Coach of the Year'
  ]

  const [categoria, setCategoria] = useState(categorias[0]);

  const tipoNome = categoria === "Campeão" ? "Equipe" : categoria === "Coach of the Year" ? "Treinador" : "Atleta"; 

  const aoSalvar = (evento) => {
    evento.preventDefault();
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Bolão NBA 2026/27</h2>
        <ListaSuspensa obrigatorio={true} label="Categoria" itens={categorias} valor={categoria} aoAlterado={setCategoria}/>
        <CampoTexto obrigatorio={true} label={tipoNome} placeholder="Digite aqui..." />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem..." />
        
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
