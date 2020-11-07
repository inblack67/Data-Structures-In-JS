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
    insertionSort ()
    {
        for ( let i = 1; i < arr.length; i++ )
        {
            let j = i - 1;
            let x = arr[ i ];
            while ( arr[ j ] > x && j > -1 )
            {
                arr[ j + 1 ] = arr[ j ];
                j--;
            }

            arr[ j + 1 ] = x;
        }
    }
    selectionSort ()
    {
        for ( let i = 0; i < this.arr.length; i++ )
        {
            let k = i;
            let j = i;
            for ( ; j < this.arr.length; j++ )
            {
                if ( this.arr[ j ] < this.arr[ k ] )
                {
                    this.swap( j, k );
                }
            }
        }
    }
    swap ( x: number, y: number )
    {
        let temp = this.arr[ x ];
        this.arr[ x ] = this.arr[ y ];
        this.arr[ y ] = temp;
    }
}

const arr = [ 8, 5, 7, 3, 2 ];
const s1 = new Sort( arr );
// s1.bubbleSort();
// s1.insertionSort();
s1.selectionSort();
console.log( s1.arr );