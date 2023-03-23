import style from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
  const [busca, setbusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <section className={style.cardapio}>
      <h3 className={style.cardapio__titulo}>Cardápio</h3>
      <Buscador
        busca={busca}
        setBusca={setbusca}
      />
      <div className={style.cardapio__filtros}>
        <Filtros
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        <Itens busca={busca} filtro={filtro} ordenador={ordenador}></Itens>
      </div>
    </section>
  );
}