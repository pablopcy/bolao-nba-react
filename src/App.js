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
      emoji: '\u{1F3C6}',
    },
    {
      nome: 'MVP',
      corPrimaria: '#82cffa',
      emoji: '\u{1F451}',
    },
    {
      nome: 'Finals MVP',
      corPrimaria: '#a6d157',
      emoji: '\u{1F3C5}',
    },
    {
      nome: 'Defensive Player of the Year',
      corPrimaria: '#e06b69',
      emoji: '\u{1F6E1}\u{FE0F}',
    },
    {
      nome: 'Rookie of the Year',
      corPrimaria: '#ffba05',
      emoji: '\u{1F423}',
    },
    {
      nome: 'Clutch Player of the Year',
      corPrimaria: '#ff8a29',
      emoji: '\u{1F9CA}',
    },
    {
      nome: 'Sixth Man of the Year',
      corPrimaria: '#b57edc',
      emoji: '\u{26A1}',
    },
    {
      nome: 'Most Improved Player',
      corPrimaria: '#5bc4bf',
      emoji: '\u{1F4C8}',
    },
    {
      nome: 'Coach of the Year',
      corPrimaria: '#e887b3',
      emoji: '\u{1F4CB}',
    }
  ]

  const [palpites, setPalpites] = useState([]);

  const aoNovoPalpiteAdicionado = (palpite) => {
  const novoPalpite = {
    ...palpite,
    id: crypto.randomUUID(),
  };

  setPalpites(atuais => [...atuais, novoPalpite]);
};

const excluirPalpite = (id) => {
  setPalpites(atuais =>
    atuais.filter(palpite => palpite.id !== id)
  );
};

  return (
    <div className="App">
      <Imagem />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoPalpiteCadastrado={palpite => aoNovoPalpiteAdicionado(palpite)}/>
      <Categoria palpites={palpites} categorias={categorias} aoExcluir={excluirPalpite}/>
      <Rodape />

    </div>
  );
}

export default App;
