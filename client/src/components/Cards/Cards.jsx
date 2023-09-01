import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards = () => {

    const countries = useSelector(state => state.countries)
    // Cargar GetCountry
    return (
        <div className={style.container}>
        {countries.map(({id, name, continent, population})=>{
            return <Card
            id={id}
            key={id}
            name={name}
            continent={continent}
            population={population}
            />
        })}        
        </div>
    )
};

export default Cards;