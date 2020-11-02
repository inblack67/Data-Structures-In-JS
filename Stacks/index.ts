class TStack
{
    items: number[];
    length: number;
    constructor ()
    {
        this.items = [];
        this.length = this.items.length;
    }
    push ( el: number )
    {
        this.items.push( el );
    }
    pop ()
    {
        this.items.pop();
    }
    isEmpty ()
    {
        return this.items.length === 0;
    }
    clearStack ()
    {
        this.items = [];
    }
    display ()
    {
        console.log( this.items );
    }
}

const s1 = new TStack();
s1.push( 1 );
s1.push( 2 );
s1.push( 3 );
// s1.pop();
// s1.clearStack()
console.log( s1.isEmpty() );
s1.display();