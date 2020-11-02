class StackUsingArray
{
    items: number[];
    top: number;
    constructor ( size: number )
    {
        this.items = new Array( size );
        this.top = -1;
    }
    push ( el: number )
    {
        if ( this.top === this.items.length - 1 )
        {
            console.log( `Stack Overflow` );
            return;
        }
        this.items[ this.top + 1 ] = el;
        this.top++;
    }
    pop ()
    {
        if ( this.top === -1 )
        {
            console.log( `Stack is empty` );
            return;
        }
        const poppedItem = this.items[ this.top ];
        delete this.items[ this.top ];
        this.top--;
        return poppedItem;
    }
    isEmpty ()
    {
        const isIt = this.top === -1;
        console.log( isIt );
        return isIt;
    }
    isFull ()
    {
        const isIt = this.top === this.items.length - 1;
        console.log( isIt );
        return isIt;
    }
    stackTop ()
    {
        if ( this.top === -1 )
        {
            console.log( `Stack is empty` );
            return;
        }
        console.log( this.items[ this.top ] );
    }
    peek ( index: number )
    {
        if ( index > this.top || index < 0 )
        {
            console.log( `Invalid index` );
            return;
        }
        console.log( this.items[ index ] );
    }
    display ()
    {
        for ( let i = this.top; i >= 0; i-- )
        {
            console.log( this.items[ i ] );
        }
    }
}

const s1 = new StackUsingArray( 5 );
s1.push( 1 );
s1.push( 2 );
s1.push( 3 );
s1.push( 4 );
s1.push( 5 );
s1.isFull();
// s1.pop();
s1.isEmpty();
s1.stackTop();
s1.peek( 4 );
s1.display();