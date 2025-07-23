import { sum } from './utils.js';
import logLegal from 'chalk';

console.log('Rodando meu projeto');
console.log(sum(1,2));

const log = console.log;

// Combine styled and normal strings
log(logLegal.blue('Hello') + ' World' + logLegal.red('!'));

// Compose multiple styles using the chainable API
log(logLegal.blue.bgRed.bold('Hello world!'));