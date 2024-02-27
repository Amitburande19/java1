//add /create
let names = ["mayuri","vaibhav","ram","sham"]
names.push('sita')
//console.log(names)

//retrive
console.log(names[1])

//update
names[2] ="rajesh"
//console.log(names)

//delete
names.pop()
console.log(names)

//crud
//----------------------------------------------------------------------------------------

//object = let a = {}
// array = let b = []
//string = let c = ""
//==============================================================================

//let obj ={}
//key:value ==> property

/*let info ={
    firstName:"mayuri",
    lastName:"kumar",
    rollNumber:26,
    age:36
}
//crud

//1.retrive/fetch
//dot notation
console.log(info.lastName)
console.log(info.age)

//bracket notataion
console.log(info["firstName"])
console.log(info["rollNumber"]) */

// create add
/*let info ={
    firstName:"mayuri",
    lastName:"kumar",
    rollNumber:26,
    age:36
}

//dot
info.city="pune"
console.log(info)
//bracket
info["language"]="marathi"
console.log(info) */


//update
/*let info ={
    firstName:"mayuri",
    lastName:"kumar",
    rollNumber:26,
    age:36 
}
//dot
//info.firstName="vaibhav"
//console.log(info)
//bracket
//info["age"]=42
//console.log(info)

//delete
//dot
delete info.age
//console.log(info)
//bracket
//delete info["firstName"]
//console.log(info)
*/


let info ={
    firstName:"mayuri",
    lastName:"kumar",
    rollNumber:26,
    age:36
}
for(let key in info){
    console.log(info.key)
}

//bracket
for(let key in info){
    console.log(info[key])
}

for(let key in info){
   console.log(key,info[key])
}














































