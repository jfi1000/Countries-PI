import SearchInput from './SearchInput/SearchInput'
import styles from '../SearchCountry/SearchCountry.module.css';

const SearchCountry = ()=>{
    return(
        <div className={styles.home}>
            <SearchInput />
            <h1>Componente SearchCountry!!!</h1>
        </div>
    )
};

export default SearchCountry;