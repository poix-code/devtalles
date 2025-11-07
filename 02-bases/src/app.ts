
import { getPokemonById } from './js-foundation/06-promises';
import { buildLogger } from './plugins/logger.plugin';

// getPokemonById(1)
// .then((pokemon) => console.log({ pokemon }))
// .catch((error) => console.log('Por favor intente más tarde'))
// .finally(() => console.log('Proceso terminado'));
const appLogger = buildLogger('app.ts');
appLogger.log('Iniciando aplicación TypeScript...');
appLogger.error('Ocurrió un error inesperado en TypeScript');
getPokemonById(25).then()
