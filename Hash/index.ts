const arr: number[] = [ 1, 2, 3, 4, 5 ];
const hash: number[] = [];
arr.forEach( el => hash[ el ] = 1 );

const hashSearch = ( el: number ): boolean =>
{
    if ( hash[ el ] === 1 )
    {
        return true;
    }
    return false;
};

console.log( hashSearch( 7 ) );