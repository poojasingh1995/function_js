// student=["kumar","nayak","ishu"]
// s=student.filter(function(e){
//     if(e.includes("k")){
//         return e
//     }
// })
// console.log(s)

// s=student.filter((e)=>{
//     if(e.includes("k")){
//         return e
//     }
// })
// console.log(s);

// s=student.filter((e)=>
//     (e.includes("k")) ? e:null)
// console.log(s);

// s=student.filter((e)=>
//    e.includes("k") && e
// )
// console.log(s)


let fs=require("fs")
let k=require("readline-sync")
dic={}
i=1
while(i<3){
    let name=k.question("enter the name")
    let surname=k.question("enter the surname")
    dic[name]=surname
}
fs.writeFileSync("pooja_data.json",JSON.stringify(dic,null,4))
let data1=fs.readFileSync("pooja_data.json",utf8)
data1.filter (function(e){
    if(e.include(singh)){
        console.log(e)
    }
});