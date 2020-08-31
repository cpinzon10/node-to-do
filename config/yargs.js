// requiries


const descripcion = {
    alias: 'd',
    desc: 'Descripcion de Tarea Por Hacer',
    demand: true
}

const completado = {
    alias: 'c',
    desc: 'Marca como completado Estado de la Tarea Por hacer',
    default: true
}


const argv = require('yargs')
    .command('crear', 'Crear una Tarea Por Hacer', { descripcion })
    .command('actualizar', 'Actualiza una Tarea Por Hacer', { descripcion, completado })
    .command('borrar', 'Borra  una Tarea Por Hacer', { descripcion })

.argv

module.exports = {
    argv
}