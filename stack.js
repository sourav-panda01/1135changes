class Mystack
{
	constructor(s)
	{
		this.maxsize=s;
		this.top=-1;
		this.a=[]
	}
	push(t){
		a[++top] = t;
	}
	pop(){
		return stackArray[top--];
	}
	peek(){
		return stackArray[top];
	}
	isEmpty(){
		return (top == -1);
	}
	isFull(){
		return (top == maxSize - 1);  
	}
}
theStack=Mystack(5);
theStack.push(10);
theStack.push(20);
theStack.push(30);
theStack.push(40);
theStack.push(50);
theStack.peek();
while(!theStack.isEmpty()){
   var value = theStack.pop();
   System.out.print(value);
   System.out.print(" ");
}



class Queue {
	constructor(front, rear, size){
		this.front=0;
		this.queue=[];
		this.size=size;
	}
    isFull(queue)
	{
		return (queue.length == size);
	}
	isEmpty(queue)
	{
		return (queue.length==0)
	}
	dequeue(queue)
	{
    	if (isEmpty(queue)){
			return -1;
		}
    	var item = queue[front];
    	queue[front] = (queue[front + 1)% queue.length;
    	return item;
	}
	enqueue(queue,item)
	{
    	if (isFull(queue)){
			return;
		}
    	queue[rear] = (queue[rear + 1])% queue.length;
    	queue[rear] = item;
    	console.log(" enqueued to queue");
	}
};