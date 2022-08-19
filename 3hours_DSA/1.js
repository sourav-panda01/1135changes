class Mystack
{
    
	constructor(s)
	{
		this.maxsize=s;
		this.top=-1;
		this.a=[]
	}
	push(t){
	    this.top+=1
		this.a[this.top] = t;
	}
	pop(){
		return this.a[this.top--];
	}
	peek(){
		return this.a[this.top];
	}
	isEmpty(){
		return (this.top == -1);
	}
	isFull(){
		return (top == maxSize - 1);  
	}
	getmin(){
	    var min=this.a.pop()
	    while(!theStack.isEmpty()){
	        var value=theStack.pop()
            if(min>value){
                min=value
            }
        }
	    return min
	}
}
theStack=new Mystack(5);
theStack.push(10);
theStack.push(20);
theStack.push(30);
theStack.push(40);
theStack.push(50);
console.log(theStack.peek())
console.log(theStack.getmin());

