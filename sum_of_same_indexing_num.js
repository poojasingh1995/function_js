function add_number(num1,num2){
    console.log(num1+num2)
}
function add_num_list(list1,list2){
    for(var i=0;i<3;i++){
        add_number(list1[i],list2[i])
    }
}
add_num_list([50, 60, 10],[10, 20, 13])