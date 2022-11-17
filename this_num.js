class class_name{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    detail(){
        console.log(this.name,"",this.age)
    }
}
var s1=new class_name("Diana Rey",23)
var s2=new class_name("Pooja Singh",20)
s1.detail()
s2.detail()