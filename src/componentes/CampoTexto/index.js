import { useId } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
  const id = useId();
  const erroId = `${id}-erro`;

  return (
    <div className="campo-texto">
      <label htmlFor={id}>{props.label}</label>

      <input
        id={id}
        className={props.erro ? 'campo-com-erro' : ''}
        value={props.valor}
        onChange={evento => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        aria-invalid={Boolean(props.erro)}
        aria-describedby={props.erro ? erroId : undefined}
      />

      {props.erro && (
        <p id={erroId} className="mensagem-erro" funcao="alert">
          {props.erro}
        </p>
      )}
    </div>
  );
};

export default CampoTexto;