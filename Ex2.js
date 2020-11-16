function Node (element) {
  this.element = element;
  this.next = null;
}

function Llist () {
  this.head = new Node ('head');
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}

function display () {
  var currNode = this.head;
  while (!(currNode.next === null)) {
    console.log (currNode.next.element);
    currNode = currNode.next;
  }
}

function find (item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert (newElement, item) {
  var newNode = new Node (newElement);
  var current = this.find (item);
  newNode.next = current.next;
  current.next = newNode;
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next === null) && currNode.element.next != item) {
        currNode = currNode.next;
    }
    return currNode
    
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    while (!(prevNode.next === null)) {
        prevNode = prevNode.next.next
    }
}


var cities = new Llist ();
cities.insert ('Conway', 'head');
cities.insert ('Russellville', 'Conway');
cities.insert ('Carlisle', 'Russellville');
cities.insert ('Alma', 'Carlisle');
cities.display ();
console.log ();
 cities.remove ('Carlisle');
cities.display ();