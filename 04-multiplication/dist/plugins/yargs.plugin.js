"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarg = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.yarg = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base number for multiplication table'
})
    .options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limit number for multiplication table'
})
    .options('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table in console'
})
    .options('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
})
    .options('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
})
    .check((argv, options) => {
    if (argv.b < 1)
        throw 'Error: base must be greater than 0';
    if (argv.l < 1)
        throw 'Error: limit must be greater than 0';
    return true;
})
    .parseSync();
