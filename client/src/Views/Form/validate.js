export default (data) => {
    const errores = {};

    if (!data.nombre) {
        errores.nombre = 'El nombre es obligatorio.';
    }

    if (!data.dificultad) {
        errores.dificultad = 'La dificultad es obligatoria.';
    } else if (isNaN(data.dificultad) || parseFloat(data.dificultad) > 5) {
        errores.dificultad = 'La dificultad debe ser un número menor o igual a 5.';
    }

    if (data.duracion !== '' && (isNaN(data.duracion) || parseFloat(data.duracion) > 5)) {
        errores.duracion = 'La duración debe ser un número menor o igual a 5.';
    }

    if (!data.temporada) {
        errores.temporada = 'La temporada es obligatoria.';
    }

    // Agregar más validaciones para otros campos si es necesario

    return errores;
}
