//program 1
let names = ["chinmay","shirish","ninad"]
let a =names[0]
let b = names[1]
let c = names[2]
console.log(a)
console.log(b)
console.log(c)
let[a1,b1,c1]=names
console.log(a1)
console.log(b1)
console.log(c1)

//program 2

let fruits = ["aaple","mango","banana"]
let[q1, ,q2]=fruits
console.log(q1)
console.log(q2)

//program3 

let cities =[["nagpur","wardha"],["bhopal","indore"],["lulknow","agra"]]
let [[c11,c22],[c33,c44],[c55,c66]]=cities
console.log(c55)

//program 4 
let info = {
    firstname : "chinmay",
    lastname : "deshpande"
}
let{firstname,lastname}=info
console.log(firstname)
console.log(lastname)

let vehicle = {
    color : "red",
    type : "sedane"
}
let {color:cl,type:ty}=vehicle
console.log(cl)
console.log(ty)
// program 4

let info2 = {
    fullName: "chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName,parent:{mother,father}}=info2
console.log(fullName)
console.log(mother)
console.log(father)

//program 5

let students = [
    {
        fn:"chinmay",
        ln:"deshpande"
    },
    {
        fn:"sarika",
        ln:"deshpande"
    }
]

let[{fn:f1,ln:l1},{fn: f2,ln:l2}]=students
console.log(f1)
console.log(f2)
console.log(l1)
console.log(l2)


// program 6

let info3={
    firstName:"chinmay",
    lastName : "deshpande",
    skills : ["python","javascript"]
}

let {firstName:f3,lastName:l3,skills:[sub1,sub2]}= info3
console.log(f3)
console.log(l3)
console.log(sub1)
console.log(sub2)