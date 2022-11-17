const getRollNo=()=>{
    setTimeout(()=>{
        console.log("Hii Pooja")
        let RollNo=[1,2,3,4,5]
        console.log(RollNo)
        setTimeout((RollNo)=>{
            const boidata={
                name:"pooja",
                age:20
            }
            console.log(`My name is ${boidata.name},and I am ${boidata.age} years old.`)
        },2000,RollNo[2])
    },1000)
}
getRollNo()
