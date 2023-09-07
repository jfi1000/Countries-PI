import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards = ({countries}) => {
    return (
        <div className={style.container}>
        
        {countries.map(({id, name, continent, population,flagImage})=>{
            return <Card
            id={id}
            key={id}
            name={name}
            population={population}
            continent={continent}
            flagImage={flagImage}
            />
        })}        
        </div>
    )
};

export default Cards;