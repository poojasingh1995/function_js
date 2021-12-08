
function perfect(num){
    sum=0
    for(var i=0;i<num;i++){
        if (num%i==0){
            sum=sum+i
        }
    }
    if (num==sum){
        console.log(num,"is a perfect num")
    }
    else{
        print(num,"is not a perfect num")
    }
}
perfect(6)