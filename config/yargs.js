const descripcion = {
    demand: true,
    alias: 'd',
    descrip: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    descrip: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', { descripcion })
    .command('actualizar', 'Actualizar una tarea a partir de su descripción', { descripcion, completado })
    .command('borrar', 'Borra una tarea a partir de la descripcion', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
};