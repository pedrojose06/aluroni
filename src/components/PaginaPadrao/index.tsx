import style from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>
          A casa do cogido e da massa
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}