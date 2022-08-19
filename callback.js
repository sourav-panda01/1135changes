document.getElementById('clickMe').addEventListener("click",function(){
    console.log("Hello")
})
const posts=[
    {tittle:'post one',body:'his is post one'
    },
    {title:'post two',body:'this is post two'
    },
    {title:'post three',body:'this is post three'
    }
];
function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post,index)=>{
            output+='<li>${post.title} new Date()</li>';            
        });
        document.body.innerHTML=output;
    }, 2000);
}
function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
createPost({title:'postfour',body:'this is post three'},getPosts);
function create4thpost(createPost,getPosts){
    createPost({title:'postfour',body:'this is post three'},getPosts);
}


function createpromise(){
    var i=0
    return new Promise((resolve,reject)=>{
        posts.forEach((index)=>{
            i++;
        });
        if(i==0){
            reject("error");
        }
        else{
            resolve();
        }
    });
}

prom1=Promise.resolve(console.log(new Date()));
promie2=10;

createpromise().then(posts.pop()).catch(err=>console.log(err))
Promise.all(prom1,posts,promie2).then();





var i=0
const getbutter=new Promise((resolve,reject)=>{
    resolve('Butter');
    if(i==0){
        reject("hello this is error")
    }
});

const getcoldrink=getbutter.then((t)=>{
    console.log(`I am getting ${t}`)
    return new Promise((resolve,reject)=>resolve('coldrink'))
}).catch(err=>console.log(err));
console.log("hello")
getcoldrink.then((t)=>console.log(`I am getting cold${t}`)).catch();
