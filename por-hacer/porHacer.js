const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
};

const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const getListado = () => {
    cargarDb();

    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDb();
        return true;
    } else {
        return false;
    }
};

const guardarDb = () => {
    let datos = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, datos, (err) => {
        if (err) throw new Error('error al guardar en la db');
    });
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};