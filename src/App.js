import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';

function App() {

  const categorias = [
    {
      nome: 'Campeão',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'MVP',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Finals MVP',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Defensive Player of the Year',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Rookie of the Year',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Clutch Player of the Year',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
    {
      nome: 'Sixth Man of the Year',
      corPrimaria: '#b57edc',
      corSecundaria: '#f3e8fc'
    },
    {
      nome: 'Most Improved Player',
      corPrimaria: '#5bc4bf',
      corSecundaria: '#e0f7f5'
    },
    {
      nome: 'Coach of the Year',
      corPrimaria: '#e887b3',
      corSecundaria: '#fce7f0'
    }
  ]

  const [palpites, setPalpites] = useState([]);

  const aoNovoPalpiteAdicionado = (palpite) => {
    console.log(palpite);
    setPalpites([...palpites, palpite])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoPalpiteCadastrado={palpite => aoNovoPalpiteAdicionado(palpite)}/>

      {categorias.map(categoria => <Categoria 
        key={categoria.nome} 
        nome={categoria.nome} 
        corPrimaria={categoria.corPrimaria} 
        corSecundaria={categoria.corSecundaria}
        palpites={palpites.filter(palpite => palpite.categoria === categoria.nome)}
      />)}

    </div>
  );
}

export default App;
