import style from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import React from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface IOrdenador {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ ordenador, setOrdenador }: IOrdenador) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [style.ordenador]: true,
        [style['ordenador--ativo']]: ordenador !== '',
      }
      )}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordernar por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20
      } />}
      <div
        className={classNames({
          [style.ordenador__options]: true,
          [style['ordenador__options--ativo']]: aberto,
        })}>
        {opcoes.map(opcao => (
          <div
            className={style.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );

}