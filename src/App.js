import { useState } from 'react';
import Imagem from './componentes/Imagem';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';
import Rodape from './componentes/Rodape';
import './App.css';

function App() {
  const [modoNoturno, setModoNoturno] = useState(false);

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
  const categoriaJaExiste = palpites.some(
    item => item.categoria === palpite.categoria
  );

  if (categoriaJaExiste) {
    return 'Você já adicionou um palpite nesta categoria.';
  }

  const novoPalpite = {
    ...palpite,
    id: crypto.randomUUID(),
  };

  setPalpites(atuais => [...atuais, novoPalpite]);

  return '';
};

const excluirPalpite = (id) => {
  setPalpites(atuais =>
    atuais.filter(palpite => palpite.id !== id)
  );
};

  return (
    <div className={`App${modoNoturno ? ' modo-noturno' : ''}`}>
      <Imagem />
      <div className="controle-tema">
        <span id="rotulo-modo-noturno"></span>
        <button
          type="button"
          className="interruptor-tema"
          role="switch"
          aria-checked={modoNoturno}
          aria-labelledby="rotulo-modo-noturno"
          onClick={() => setModoNoturno(atual => !atual)}
        >
          <span className="interruptor-tema-bolinha" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {modoNoturno ? (
                <>
                  {/* Sol quando o modo noturno está ativado */}
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2 M12 20v2 M2 12h2 M20 12h2
                          M4.93 4.93l1.42 1.42 M17.65 17.65l1.42 1.42
                          M4.93 19.07l1.42-1.42 M17.65 6.35l1.42-1.42" />
                </>
              ) : (
                /* Lua quando o modo noturno está desativado */
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
              )}
            </svg>
          </span>
        </button>
      </div>
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoPalpiteCadastrado={palpite => aoNovoPalpiteAdicionado(palpite)}/>
      <Categoria palpites={palpites} categorias={categorias} aoExcluir={excluirPalpite}/>
      <Rodape />

    </div>
  );
}

export default App;
