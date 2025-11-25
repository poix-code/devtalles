//console.log(process.env.PORT || 3000);

const { FIG_TERM, COLORTERM, SHELL } = process.env;

//console.table( { FIG_TERM, COLORTERM, SHELL } );

export const characters = [ 'Goku', 'Vegeta', 'Trunks' ];

const [ , , trunks ] = characters;

//console.log( { trunks } );