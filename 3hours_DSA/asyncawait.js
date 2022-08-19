function fun1(){
console.log('a');
console.log('b');
console.log('c');
console.log('d');
console.log('e');

}


var prom= new Promise((resolve,reject)=>{
    x=0;
    if(x==0)resolve(fun1());
    else
    reject("Error")
})

