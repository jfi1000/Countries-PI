// export default (name, value) => {
export default (name, value) => {
    const errores = {};
console.log(name, value);
    switch (name) {
        case "nombre":
            if (!value) {
                errores.nombre = "El nombre es obligatorio.";
            }
            break;

        case "dificultad":
            if (!value) {
                errores.dificultad = "La dificultad es obligatoria.";
            } else if (isNaN(value) || parseFloat(value) > 5) {
                errores.dificultad =
                    "La dificultad debe ser un número menor o igual a 5.";
            }
            break;

        case "duracion":
            if (value && (isNaN(value) || parseFloat(value) > 5)) {
                errores.duracion = "La duración debe ser un número menor o igual a 5.";
            }
            break;

        case "temporada":
            if (!value) {
                errores.temporada = "La temporada es obligatoria.";
            }
            break;

        default:
            break;
    }

    return errores;
};

