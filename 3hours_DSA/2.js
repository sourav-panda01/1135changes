class Queue
{
	constructor(s)
	{
		this.maxsize=s;
		this.top=-1;
		this.front=0
		this.a=[]
	}
	push(t){
	    this.top+=1
		this.a[this.top] = t;
	}
	pop(){
		return this.a[this.front++];
	}
	peek(){
		return this.a[this.top];
	}
	isEmpty(){
	    return (this.front>this.top)
	}
	isFull(){
	    return (this.top==this.maxsize)
	}
}
theStack=new Queue(5);
theStack.push(10);
theStack.push(20);
theStack.push(30);
theStack.push(40);
theStack.push(50);
console.log(theStack.pop());
console.log(theStack.pop());

