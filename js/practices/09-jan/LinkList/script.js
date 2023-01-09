
class LinkList
{
    constructor(data)
    {
        this.head = 
        {
            value : data,
            next  : null
        };
        this.tail = this.head  
    }
        Node(nodedata)
        {
            let newnode =
            {
                value : nodedata,
                next : null
            };
            this.tail.next = newnode;
            this.tail = newnode
        }
}
let list = new LinkList(200);
list.Node(300)
list.Node(400)
list.Node(500)
list.Node(600)
list.Node(700)
console.log(list);



