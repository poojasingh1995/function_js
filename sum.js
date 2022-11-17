// function sum(num1,num2){
//     return num1+num2
// }
// console.log(sum(4,8))


// function add_num(arr1,arr2){
//     var i=0
//     var y=[]
//     for (i in arr1){
//         sum=(arr1[i]+arr2[i])
//         y.push(sum)
//     }
//     console.log(y)
// }
// add_num([50,60,10],[10,20,13])

// function add_num(arr1,arr2){
//     sum=0
//     sum1=0
//     for(i in arr1){
//         sum+=arr1[i]
//         sum1+=arr2[i]
//         // console.log(sum+sum1)
//     }
//     console.log(sum+sum1)
// }
// add_num([5,6,1],[2,2,1])

function add_number(num1,num2){
    console.log(num1+num2)
    function add_num_list(arr1,arr2){
        var i=0
        var y=[]
        while (i<arr1.length){
            b=(arr1[i]+arr2[i])
            y.push(b)
            i=i+1
        }
        console.log(y)
    }
    add_num_list([50,60,10],[10,20,13])
}
add_number(56,12)

    