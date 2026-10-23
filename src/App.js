import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';

function App() {

  const [palpites, setPalpites] = useState([]);

  const aoNovoPalpiteAdicionado = (palpite) => {
    console.log(palpite);
    setPalpites([...palpites, palpite])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoPalpiteCadastrado={palpite => aoNovoPalpiteAdicionado(palpite)}/>
      <Categoria nome="Campeão"/>
      <Categoria nome="MVP"/>
      <Categoria nome="Finals MVP"/>
    </div>
  );
}

export default App;
