import style from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';

export default function Item(props: Prato) {
    const { title, description, photo } = props;
    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={photo} alt="imagem" />
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <TagsPrato {...props} />
            </div>
        </div>
    );
}