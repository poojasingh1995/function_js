function sum_avg(){
    let k=require("readline-sync");
    var num1=k.questionInt("enter the num")
    var num2=k.questionInt("enter the num")
    var num3=k.questionInt("enter the num")
    sum=num1+num2+num3
    average=sum/3
    console.log("sum=",sum)
    console.log("average=",average)
}
sum_avg()