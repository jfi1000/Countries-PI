import style from './Card.module.css'
const Card = (props)=>{
    const {name, continent, flagImage} = props
    return(
        <div className={style.container}> 
            <div className={style.card}> 
                <div>
                    <img src={flagImage} className={style.imagen} />
                </div>
                <h3 className={style.name}>{name}</h3>
                <h3 className={style.continent}>{continent}</h3>
            </div>
        </div>
    )
};

export default Card;