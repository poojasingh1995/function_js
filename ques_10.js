function isGreaterThan20(num){
    if(num>20){
        return true
    }
}
function students(marks){
    k=0
    for(var i of marks){
        var result= isGreaterThan20(i)
        if (result === true){
            k++
        }
    }
    console.log(k);
}
students([19,15,21,25,19,25,33,54,23])
    