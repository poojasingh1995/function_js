function perfect(num){
    sum=0
    i=1
    while(i<num){
        if (num%i==0){
            sum=sum+i
        }
        i=i+1
    }
    if (num==sum){
        console.log(num,"perfect num")
    }
    else{
        console.log(num,"is not a perfect num")
    }
}
perfect(6)