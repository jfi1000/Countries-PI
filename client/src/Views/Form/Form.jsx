import styles from './Form.module.css';
import image from '../../image/actividad.png'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, saveForm } from '../../Redux/actions';
import SearchInput from '../Home/SearchInput/SearchInput';
import validate from "./validate";

const Form = () => {
    const countries = useSelector(state => state.countries);
    const [searchTerm, setSearchTerm] = useState('');
    const [form, setForm] = useState({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countryIds: []
    });
    // let [selectedOptions, setSelectedOptions] = useState([]); // Almacena las opciones seleccionadas
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [errores, setErrores] = useState({
        nombre: '',
        dificultad: '',
        temporada: '',
        countryIds: '',
    });

    const dispatch = useDispatch();
    useEffect(() => {
        // searchTerm === '' ? setSelectedOptions([]) : null
        dispatch(getCountries(searchTerm));
    }, [searchTerm]);


    // Manejar cambios en la selección de opciones
    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        // Actualizar el estado de acuerdo al campo modificado
        setForm({
            ...form,
            [name]: value,
        });

        // Validar el campo específico
        const respuesta = validate(name, value);
        console.log(respuesta);
        // setErrores(respuesta);
        setErrores((erroresPrevios) => ({
            ...erroresPrevios,
            ...respuesta, 
        }));
                
    };

    // const handleSelectChange = (event) => {
    //     // console.log(event.target.selectedOptions);
    //     const { name, value } = event.target;

    //     // Actualizar el estado de acuerdo al campo modificado
    //     setForm({
    //         ...form,
    //         [name]: value,
    //     });
    //     setErrores(validate({...form, [name]: value }))

    //     console.log(errores)

    //     // if (name === 'nombre') {
    //     //     if (value.length === 0) {
    //     //         setErrores({
    //     //             ...errores,
    //     //             name: 'Nombre es obligatorio.',
    //     //         });
    //     //     } else {
    //     //         setErrores({
    //     //             ...errores,
    //     //             name: '',
    //     //         });
    //     //     }
    //     // }


    //     // if (name === 'dificultad') {
    //     //     if (value.length === 0) {
    //     //         setErrores({
    //     //             ...errores,
    //     //             dificultad: 'dificultad es obligatorio.',
    //     //         });
    //     //     } else {
    //     //         setErrores({
    //     //             ...errores,
    //     //             dificultad: '',
    //     //         });
    //     //     }
    //     // }

    //     // if (name === 'temporada') {
    //     //     if (value.length === 0) {
    //     //         setErrores({
    //     //             ...errores,
    //     //             temporada: 'temporada es obligatorio.',
    //     //         });
    //     //     } else {
    //     //         setErrores({
    //     //             ...errores,
    //     //             temporada: '',
    //     //         });
    //     //     }
    //     // }

    //     if (event.target.selectedOptions) {
    //         const selectedOp = Array.from(event.target.selectedOptions, (option) => option.textContent);
    //         const selectedOptionsKey = Array.from(event.target.selectedOptions, (option) => option.value);

    //         setForm({
    //             ...form,
    //             [name]: selectedOptionsKey,
    //         });

    //         setSelectedOptions((prevSelectedOptions) => {
    //             return [...prevSelectedOptions, ...selectedOp];
    //         });
    //     }
    // };
    const options = countries.map(item => ({ label: item.name, value: item.id }));

    const handleSubmit = (e) => {
        e.preventDefault();
        // Crear un objeto con los datos del formulario
        const datos = form;
        console.log(datos);
        // Despachar una acción para guardar los datos
        dispatch(saveForm(datos));
        // Reiniciar los campos del formulario y los errores
        setForm({
            nombre: "",
            dificultad: "",
            duracion: "",
            temporada: "",
            countryIds: []
        });
        setErrores({
            nombre: '',
            dificultad: '',
            temporada: '',
            countryIds: '',
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.rowAlignCenter}>
                <div className={styles.columnLeft}>
                    <form onSubmit={handleSubmit}>

                        {/* Contenido de la columna izquierda */}
                        <h2>Comparte tus aventuras.</h2>

                        <input className={styles.input}
                            onChange={handleSelectChange}
                            value={form.nombre}
                            placeholder="Nombre Activdad*" type="text" name="nombre" id="nombre" />
                        <span>{errores.nombre}</span>

                        <input className={styles.input}
                            onChange={handleSelectChange}
                            value={form.dificultad}
                            placeholder="Dificultad*" type="text" name="dificultad" id="dificultad" />
                        <span>{errores.dificultad}</span>

                        <input className={styles.input}
                            onChange={handleSelectChange}
                            value={form.duracion}
                            placeholder="Duración" type="text" name="duracion" id="duracion" />
                        <span>{errores.duracion}</span>

                        <p>Temporada*:</p>
                        <label>
                            <input
                                type="radio"
                                name="temporada"
                                value="Otoño"
                                onChange={handleSelectChange}
                                checked={form.temporada === "Otoño"}
                            />
                            Otoño
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="temporada"
                                value="Verano"
                                onChange={handleSelectChange}
                                checked={form.temporada === "Verano"}
                            />
                            Verano
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="temporada"
                                value="Primavera"
                                onChange={handleSelectChange}
                                checked={form.temporada === "Primavera"}
                            />
                            Primavera
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="temporada"
                                value="Invierno"
                                onChange={handleSelectChange}
                                checked={form.temporada === "Invierno"}
                            />
                            Invierno
                        </label>
                        <span>{errores.temporada}</span>

                        <p>Selecciona el país.</p>
                        <SearchInput onSearch={setSearchTerm} />
                        <select
                            multiple
                            className={styles.multiselect}
                            value={selectedOptions}
                            onChange={handleSelectChange}
                            name='countryIds'
                        >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <p>
                            Opciones seleccionadas: {selectedOptions.join(', ')}
                        </p>
                        <button type="submit">Guardar Datos</button>
                    </form>

                </div>
                <div className={styles.columnRight}>
                    {/* Contenido de la columna derecha */}
                    <h2>Columna Derecha</h2>
                    <img src={image} width="100%" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    )
};

export default Form;