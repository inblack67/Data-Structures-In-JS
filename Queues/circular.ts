class CicularQueue
{
    items: number[];
    size: number;
    constructor ()
    {
        this.items = [];
        this.size = this.items.length;
    }
    enqueue ( el: number )
    {
        this.items.push( el );
    }
    dequeue ()
    {
        this.items.shift();
    }
    display ()
    {
        console.log( this.items );
    }
}

const q1 = new CicularQueue();
q1.enqueue( 1 );
q1.enqueue( 2 );
q1.enqueue( 3 );
q1.dequeue();
q1.display();