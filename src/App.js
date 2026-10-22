import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

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
    </div>
  );
}

export default App;
