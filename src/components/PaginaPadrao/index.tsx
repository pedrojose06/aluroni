import style from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import styleTema from 'styles/Tema.module.scss';

export default function PaginaPadrao() {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__text}>
          A casa do cogido e da massa
                </div>
            </header>
            <div className={styleTema.container}>
                <Outlet />
            </div>
        </>
    );
}