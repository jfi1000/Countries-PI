import style from './Card.module.css'
import { NavLink } from 'react-router-dom';

const Card = (props)=>{
    const {id, name, continent, flagImage} = props
    return(
        <div className={style.container}> 
            <div className={style.card}> 
                <div className={style.botonImagen}>
                <NavLink to={`/detail/${id}`}>
                        <img src={flagImage} className={style.imagen} />
                </NavLink>
                </div>
                <h3 className={style.name}>{name}</h3>
                <h3 className={style.continent}>{continent}</h3>
            </div>
        </div>
    )
};

export default Card;