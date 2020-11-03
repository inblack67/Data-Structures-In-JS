class QNode
{
    data: number;
    next: QNode;
    constructor ( data: number, next = null )
    {
        this.data = data;
        this.next = next;
    }
}

class QueueUsingLinkedList
{
    size: number;
    front: QNode;
    rear: QNode;
    constructor ()
    {
        this.size = 0;
        this.front = null;
        this.rear = null;
    }
    enqueue ( el: number )
    {
        const newNode = new QNode( el );
        if ( !this.rear )
        {
            this.rear = newNode;
            this.front = newNode;
            this.size++;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
        this.size++;
    }
    dequeue ()
    {
        if ( !this.front )
        {
            console.log( `Queue is empty` );
            return;
        }
        this.front = this.front.next;
        this.size--;
    }
    display ()
    {
        let curr = this.front;
        while ( curr )
        {
            console.log( curr.data );
            curr = curr.next;
        }
    }
}

const q1 = new QueueUsingLinkedList();
q1.enqueue( 1 );
q1.enqueue( 2 );
q1.enqueue( 3 );
q1.enqueue( 4 );
q1.enqueue( 5 );
q1.dequeue();
q1.display();