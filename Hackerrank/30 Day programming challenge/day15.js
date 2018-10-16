 this.insert=function(head,data){
        let newNode = new Node(data)
        if(head == null){
            return newNode;
        }
        else{
            let currentNode = head
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            return head
        }
    };