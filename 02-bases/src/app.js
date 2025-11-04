
//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrow');

//const id = 10;
//console.log(getUserById(id));
//const { getAge, getUUID } = require('./plugins');
//const { buildMakePerson } = require('./js-foundation/05-factory');

//const makePerson = buildMakePerson({ getUUID, getAge });

//const person = makePerson({ name: 'Juan', birthdate: '1994-09-16' });
//console.log(person);
const { buildLogger } = require('./plugins');
const { getPokemonById } = require('./js-foundation/06-promises');

const appLogger = buildLogger('app.js');
appLogger.log('Iniciando aplicación...');
appLogger.error('Ocurrió un error inesperado');
getPokemonById(1)
.then((pokemon) => console.log({ pokemon }))
.catch((error) => console.log('Por favor intente más tarde'))
.finally(() => console.log('Proceso terminado'));
