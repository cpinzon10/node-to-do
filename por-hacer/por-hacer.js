const fs = require('fs');

let listadoPorHacer = [];


//Funcion para crear tarea por hacer
const crear = (descripcion) => {

    leerDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardaDB();

    return porHacer;

    leerDB();
}

//Guarda data en Base de dato
const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (e) => {
        if (e) {

            if (e) throw new Error('No se pudo grabar archivo', e);

        }
    })
}


//Leer data desde un archivo json
const leerDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListaTareas = () => {
    leerDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    leerDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    leerDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }

}





module.exports = {
    crear,
    getListaTareas,
    actualizar,
    borrar
}