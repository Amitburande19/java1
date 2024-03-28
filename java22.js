//object literal
let chinmay={
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:24
}

let amol={
    firstName:"amol",
    lastName:"rao",
    age:34,
    rollNo:35
}

//Es6 class
class person{
    first_name="chinmay"
    last_name="deshpande"
    age=23
    rollNo=36

    display_name(){
        console.log(this.first_name+this.last_name)
    }
}
let amolA=new person()
let chinmayA=new person()

console.log(amolA.first_name)
console.log(amolA.last_name)
console.log(amolA.age)
console.log(amolA.rollNo)
console.log(amolA)
amolA.display_name()
console.log(chinmayA)

amolA.first_name="amol"
amolA.last_name="rao"
amolA.age=23
amolA.rollNo=55
console.log(amolA)


//Es6 class with constructor
/*class person{
    constructor(fn,ln,age,rollNo){
        this.firstName=fn
        this.lastName=ln
        this.rollNo=rollNo
        this.age=age
    }
    displayName(){
        console.log(this.firstName+this.lastName)
    }
}
let amolC=new person("amolR","raoR",35,6)
let chinmayc=new person("chinmayC","deshpandeC",32,34)
chinmayc.city="pune"
console.log(chinmayc)*/

for (let key in amolA){
    console.log(key.amolA[key])
}