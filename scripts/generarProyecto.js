#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const faker = require("faker/locale/es_MX");
const { concat, times } = require("ramda");
/* eslint-enable */

const { datatype, name, lorem } = faker;

function tareaSimple() {
  return {
    simple: true,
    empleados: times(empleado, datatype.number({ min: 1, max: 10 })),
    responsable: empleado(),
    horas: datatype.number({ min: 5, max: 20 }),
    infra: datatype.float({ min: 10, max: 5000 }),
    descripcion: lorem.sentence(),
  };
}

function tareaIntegracion() {
  return {
    simple: false,
    tareas: variasTareas(),
    responsable: empleado(),
  };
}

function variasTareas() {
  return concat(
    times(tareaSimple, datatype.number({ min: 1, max: 6 })),
    times(tareaIntegracion, datatype.number({ min: 0, max: 2 }))
  );
}

function empleado() {
  return {
    nombre: name.findName(),
    arancel: datatype.number({ min: 500, max: 4000 }),
  };
}

function proyecto() {
  const inicio = faker.date.future();
  return {
    titulo: lorem.slug(),
    inicio: inicio.toISOString(),
    fin_deseado: faker.date.future(undefined, inicio).toISOString(),
    tareas: variasTareas(),
  };
}

console.log(JSON.stringify(proyecto()));
