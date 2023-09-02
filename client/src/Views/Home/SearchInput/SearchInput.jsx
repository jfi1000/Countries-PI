import { useState } from 'react';
import styles from '../SearchInput/SearchInput.module.css';

// const SearchInput = ()=>{
    const SearchInput = ({ onSearch }) => {

    const [name,setName] = useState("");

    const handleChange=(event)=>{
        const {value} =event.target;
        setName([value])
        onSearch(value);

    }

    return(
    <div className={styles['wave-group']}>
        <input required type="search" className={styles.input}  value={name} onChange={handleChange} />
        <span className={styles.bar}></span>
        <label className={styles.label}>
            <span className={styles['label-char']} style={{ '--index': 0 }}>C</span>
            <span className={styles['label-char']} style={{ '--index': 1 }}>O</span>
            <span className={styles['label-char']} style={{ '--index': 2 }}>U</span>
            <span className={styles['label-char']} style={{ '--index': 3 }}>N</span>
            <span className={styles['label-char']} style={{ '--index': 4 }}>T</span>
            <span className={styles['label-char']} style={{ '--index': 5 }}>R</span>
            <span className={styles['label-char']} style={{ '--index': 6 }}>Y</span>
        </label>
    </div>
    )
};

export default SearchInput;