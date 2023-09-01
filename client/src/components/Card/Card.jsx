import style from './Card.module.css'
const Card = (props)=>{
    const {id, name, population, continent} = props
    return(
        <div className={style.card}> 
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{continent}</h1>
            <h1>{population}</h1>
        </div>
    )
};

export default Card;