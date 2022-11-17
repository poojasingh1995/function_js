let k=require("readline-sync")
let prom=new Promise(function(resolve,reject){
    let num=k.questionInt("enter the number")
    if(num%2==0){
        resolve(`${num},this is even num`)
    }
    else{
        reject(`${num},this is odd num`)
    }   
})
prom.then((result)=>{
    console.log(result)
})
prom.catch((error)=>{
    console.log(error)
})