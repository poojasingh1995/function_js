// const probj1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let rollno=[1,2,3,4,5]
//         resolve(rollno)
//         reject("your promise has been rejected")
//     },2000)
// })
// probj1.then((number)=>{
//     console.log(number)
// }).catch((error)=>{
//     console.log(error)
// })

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

