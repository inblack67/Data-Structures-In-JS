class TNode
{
    data: number;
    next: TNode;
    constructor ( data: number, next = null )
    {
        this.data = data;
        this.next = next;
    }
}

class StackUsingLinkedList
{
    size: number;
    top: TNode;
    constructor ()
    {
        this.size = 0;
        this.top = null;
    }
    push ( el: number )
    {
        const newNode = new TNode( el );
        if ( this.size === 0 )
        {
            this.top = newNode;
            this.size++;
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    pop ()
    {
        if ( this.size === 0 )
        {
            console.log( 'Got nothing to pop' );
            return;
        }
        this.top = this.top.next;
        this.size--;
    }
    stackSize ()
    {
        console.log( this.size );
    }
    display ()
    {
        let curr = this.top;
        while ( curr )
        {
            console.log( curr.data );
            curr = curr.next;
        }
    }
}

const s1 = new StackUsingLinkedList();
s1.push( 1 );
s1.push( 2 );
s1.push( 3 );
s1.pop();
s1.stackSize();
s1.display();