var a=require("readline-sync")
var num=a.questionInt("enter the num")
var temp=num
var sum=0
while(temp>0){
    let digit=temp%10
    sum=sum+digit**3
    temp=Math.floor(temp/10)
}
if(num===sum){
    console.log(num,"is a armstrong num")
}
else{
    console.log(num,"is not a armstrong num")
}