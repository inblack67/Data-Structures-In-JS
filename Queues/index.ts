class Queue
{
    items: number[];
    size: number;
    front: number;
    rear: number;
    constructor ( queueSize: number )
    {
        this.items = new Array( queueSize );
        this.size = 0;
        this.front = -1;
        this.rear = -1;
    }
    enqueue ( el: number )
    {
        if ( this.rear === this.items.length - 1 )
        {
            console.log( `Queue is full` );
            return;
        }
        this.items[ ++this.rear ] = el;
        this.size++;
    }
    dequeue ()
    {
        if ( this.rear === this.front )
        {
            console.log( `Queue is empty` );
            return;
        }
        delete this.items[ ++this.front ];
        this.size--;
    }
    display ()
    {
        console.log( this.items );
    }
}

const q1 = new Queue( 5 );
q1.enqueue( 1 );
q1.enqueue( 2 );
q1.enqueue( 3 );
q1.enqueue( 4 );
q1.enqueue( 5 );
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.display();