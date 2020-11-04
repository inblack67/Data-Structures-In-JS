class Sort
{
    arr: number[];
    size: number;
    constructor ( arr: number[] )
    {
        this.arr = arr;
        this.size = arr.length;
    }
    bubbleSort ()
    {
        for ( let i = 0; i < this.size - 1; i++ )
        {
            let flag = 0;
            for ( let j = 0; j < this.size - 1 - i; j++ )
            {
                if ( this.arr[ j ] > this.arr[ j + 1 ] )
                {
                    // swap
                    const temp = arr[ j ];
                    arr[ j ] = arr[ j + 1 ];
                    arr[ j + 1 ] = temp;
                    // isSwapped = true
                    flag = 1;
                }
            }
            if ( flag === 0 )
            {
                return;
            }
        }
    }
}

const arr = [ 8, 5, 7, 3, 2 ];
const s1 = new Sort( arr );
s1.bubbleSort();
console.log( s1.arr );