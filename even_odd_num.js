// function even_odd_num(num1,num2){
//     if(num1%2==0 && num2%2==0){
//         console.log("both are even")
//     }else{
//         console.log("both are not even")
//     }
// }
// even_odd_num(2,8)

// function check_number_list(num1,num2){
//     var i=0
//     while (i<num1.length){
//         if (num1[i]%2==0 && num2[i]%2==0){
//             console.log(num1[i],num2[i],"dono even num hai")
//         }
//         else{
//             console.log(num1[i],num2[i],"dono odd num hai")
//         }
//         i=i+1
//     }
// }
// check_number_list([2,6,18,10,3,75],[6,19,24,12,3,87])


// function check_number_list(num1,num2){
//     for(var i=0;i<num1.length;i++){
//         if (num1[i]%2==0 && num2[i]%2==0){
//             console.log(num1[i],num2[i],"dono even num hai")
//         }
//         else{
//             console.log(num1[i],num2[i],"dono odd num hai")
//         }
//     }
// }
// check_number_list([2,6,18,10,3,75],[6,19,24,12,3,87])

function showNumbers(limit){
    for(i=0;i<=limit;i++){
        if(i%2 ===0){
            console.log(i," - Even");
        }
        else{
            console.log(i," - Odd");
        }
    }
}
showNumbers(3)
