import React from 'react'
import style from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface IBuscador{
    busca:string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: IBuscador){

    return(
            <div className={style.buscador}>
                <input
                    value={busca}
                    placeholder='Buscar'
                    onChange={evento =>
                        setBusca(evento.target.value)}
                />

                <CgSearch
                size={20}
                color="#4c4d5e"
                />
            </div>
        )

    }