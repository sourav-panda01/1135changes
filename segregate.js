
// JavaScript program to segregate
// even and odd nodes in a Linked List
	
// Head of list
var head;

// Linked list Node
class Node
{
	constructor(val)
	{
		this.data = val;
		this.next = null;
	}
}
	
function segregateEvenOdd()
{	
	var evenStart = null;
	var evenEnd = null;
	var oddStart = null;
	var oddEnd = null;
	var currentNode = head;
		
	while(currentNode != null)
	{
		var element = currentNode.data;
			
		if(element % 2 == 0)
		{			
			if(evenStart == null)
			{
				evenStart = currentNode;
				evenEnd = evenStart;
			}
			else
			{
				evenEnd.next = currentNode;
				evenEnd = evenEnd.next;
			}
				
		}
		else
		{			
			if(oddStart == null)
			{
				oddStart = currentNode;
				oddEnd = oddStart;
			}
			else
			{
				oddEnd.next = currentNode;
				oddEnd = oddEnd.next;
			}
		}
		
		// Move head pointer one step in
		// forward direction
		currentNode = currentNode.next;
	}	
		
	if(oddStart == null ||
	evenStart == null)
	{
		return;
	}
		
	evenEnd.next = oddStart;
	oddEnd.next = null;
	head=evenStart;
}
	
/* Given a reference (pointer to pointer)
to the head of a list and an int, push
a new node on the front of the list. */

function push(new_data)
{
	/* 1 & 2: Allocate the Node &
			Put in the data*/
	var new_node = new Node(new_data);

	// 3. Make next of new Node as head
	new_node.next = head;

	// 4. Move the head to point to new Node
	head = new_node;
}

// Utility function to print a linked list
function printList()
{
	var temp = head;
	while(temp != null)
	{
		document.write(temp.data+" ");
		temp = temp.next;
	}
	document.write("<br/>");
}
	
// Driver code
push(11);
push(10);
push(9);
push(6);
push(4);
push(1);
push(0);
document.write(
		"Original Linked List<br/>");
printList();

segregateEvenOdd();

document.write(
		"Modified Linked List<br/>");
printList();
// This code is contributed by todaysgaurav

