// object literal

let chinmay={
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:function(){
        console.log(this.firstName+this.lastName)
    }
}

let amol={
    firstName:"amol",
    lastName:"rao",
    displayName:function(){
        console.log(this.firstName+this.lastName)
    }
}

class person{
    first_name="chinmay"
    last_name="deshpande"

    displayName(){
        console.log(this.first_name+this.last_name)
    }

}
let amolE=new person()
let chinmayE= new person()
console.log(chinmayE)
amolE.first_name="amolE"
amolE.last_name="raoE"
console.log(amolE)

//program 2
class personB{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln

    }
    displayName(){
        console.log(this.firstName+this.lastName)
    }
}
let amolB=new personB("amolB","raoB")
let sanjayB=new personB("sanjayB","rautB")
console.log(amolB)
console.log(sanjayB)

// program 3
// set and get method

class personC{
    setFirstName(fn){
        this.firstName=fn
    }
    setLastName(ln){
        this.lastName=ln
         
    }
    getFirstName(){
        return this.firstName
    }
    getLastname(){
        return this.lastName
    }
    displayName(){
        console.log(this.firstName+this.lastName)
    }
}

let amolC= new personC()
console.log(amolC)
amolC.setFirstName("amolC")
amolC.setLastName("raoC")
let a = amolC.getFirstName()
let b = amolC.getLastname()
console.log(a)
console.log(b)
