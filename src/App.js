import { useState } from 'react';
import Imagem from './componentes/Imagem';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';
import Rodape from './componentes/Rodape';

function App() {

  const categorias = [
    {
      nome: 'Campeão',
      corPrimaria: '#57c278',
    },
    {
      nome: 'MVP',
      corPrimaria: '#82cffa',
    },
    {
      nome: 'Finals MVP',
      corPrimaria: '#a6d157',
    },
    {
      nome: 'Defensive Player of the Year',
      corPrimaria: '#e06b69',
    },
    {
      nome: 'Rookie of the Year',
      corPrimaria: '#ffba05',
    },
    {
      nome: 'Clutch Player of the Year',
      corPrimaria: '#ff8a29',
    },
    {
      nome: 'Sixth Man of the Year',
      corPrimaria: '#b57edc',
    },
    {
      nome: 'Most Improved Player',
      corPrimaria: '#5bc4bf',
    },
    {
      nome: 'Coach of the Year',
      corPrimaria: '#e887b3',
    }
  ]

  const [palpites, setPalpites] = useState([]);

  const aoNovoPalpiteAdicionado = (palpite) => {
    setPalpites([...palpites, palpite])
  }

  return (
    <div className="App">
      <Imagem />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoPalpiteCadastrado={palpite => aoNovoPalpiteAdicionado(palpite)}/>
      <Categoria palpites={palpites} categorias={categorias}/>
      <Rodape />

    </div>
  );
}

export default App;
