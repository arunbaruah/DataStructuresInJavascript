//Running time of a LinkedIn- Big-Oh. In order to insert an element either in head or tail, or removing from head or tail it's just O(1) i.e constant time and for search it will take O(N) i.e we have to search it from the beginning to end of the list. It is a sequential search. We can say it's Linear runtime

//linkedList constructor. This is just a pointer which points to the head of a node and a tail of the node. (head=>node<=tail)
function LinkedList(){
   this.head = null;
   this.tail = null;
}

//Node constructor - this constructor initialize 3 properties and the are the original value which is of importance, and a next pointer which will points to the next node and the previous pointer that points to the previous node. In this way it will create a chain of node in the linkedlist.

function Node(value, next, prev){
   this.value = value;
   this.next = next;
   this.prev = prev;
}

//adding a node to the head functionality. Create a new node right at the beginning of the node.
LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value, this.head, null);
  if(this.head)
     this.head.prev = newNode;
  else
     this.tail = newNode; //the list is empty

     this.head = newNode;
};

//adding a node to the tail. Just reverse to the previous
LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail);
  if(this.tail)
      this.tail.next = newNode;
  else
     this.head = newNode;

     this.tail = newNode;

};

//remove a node from the head from our linkedlist
LinkedList.prototype.removeHead = function(){
  if(!this.head) //list is empty
     return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head)
     this.head.prev = null;
  else
     this.tail = null;

     return val;
}
//remove a node from the tail from our linkedlist
LinkedList.prototype.removeTail = function(){
  if(!this.tail)
     return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail)
    this.tail.next = null;
  else
    this.head = null;

    return val;
}
//search method, check if the data is present in the linkedlist
LinkedList.prototype.search = function(value){
   var currentNode = this.head;
   while(currentNode){
     if(currentNode.value === value)
        return currentNode.value;
     currentNode = currentNode.next;
   }
   return null;
}
//return the index of a search value
LinkedList.prototype.indexOf = function(value){
  var indexes=[];
  var currentIndex =0;
  var currentNode = this.head;
  while(currentNode){
    if(currentNode.value === value){
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
}

var mylist = new LinkedList();

mylist.addToTail(300);
mylist.addToTail(10);
mylist.addToTail(20);
mylist.addToTail(30);
mylist.addToTail(100);
mylist.addToTail(200);
mylist.addToTail(300);
mylist.addToTail(300);
mylist.addToTail(300);

console.log(myll.indexOf(300));

//console.log(myll);



