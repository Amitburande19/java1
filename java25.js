/*let ram = {
    first_name:"ram",
    last_name:"dani",
    displayName:function(){
        console.log(this.first_name+this.last_name)
    }
}

let sayali= {
    first_name:"sayalo",
    last_name:"jogi",
    displayName:function(){
        console.log(this.first_name+this.last_name)
    }
} 

let amole= new person()
let chinmaye = new person()
chinmaye.first_name=("chinmay s") */

// program 3
// constructor

class personD {
    constructor(fn,ln){
        this.firstName= fn
        this.lastName = ln
    
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let ninad = new personD("ninad","dani")
let amol = new personD("amol","deshpande")
console.log(ninad)

// program 4
class personE{
    setFirstName(fn){
        this.firstName=fn
    }
    setLastName(ln){
        this.lastName=ln
    }
    getFirstName(fn){
        return this.firstName
    }
    getLastName(ln){
        return this.lastName
    }
}

let amolb=new personE()
amolb.setFirstName("amolb")
amolb.setLastName("rao")

// program 5

let info = {
    first_name:"chinmay",
    last_name:"deshpande"
}

info.first_name="sham"
info.city="pune"

class personE{
    set fn(fn){
        this.first_name =fn
    
    }
    set ln(ln){
        this.last_name = ln
    }
    get fn(){
        return this.fn
    }
    get ln(){
        return this.ln
    }

}

let ninad = new personE()
ninad.fn="ninad"
ninad.ln="dani"










