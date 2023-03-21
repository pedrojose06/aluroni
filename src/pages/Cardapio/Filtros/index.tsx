import filtros from './filtros.json'
import style from './Filtros.module.scss'
import classNames from 'classnames'

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({filtro, setFiltro}: Props ){
    function selecionarFiltros(opcao : IOpcao){
        if (filtro === opcao.id) return setFiltro(null);

        return setFiltro(opcao.id);

    }
    return(
        <div className={style.filtros}>
            {filtros.map((opcao) => (
                <button
                className={classNames({
                    [style.filtros__filtro]: true,
                    [style["filtros__filtro--ativo"]] : filtro === opcao.id
                })}
                key={opcao.id}
                onClick={() => selecionarFiltros(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}