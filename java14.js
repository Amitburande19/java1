let chinmay= {
    firstName : "chinmay",
    lastName : "deshpande",
    age:34,
    rollNo:67
}
console.log(chinmay)
//retrive
console.log(chinmay.firstName)
console.log(chinmay['firstName'])
//update
chinmay.lastName='dani'
chinmay["lastName"]='dani'
console.log(chinmay)
//add
chinmay.city='pune'
chinmay["language"]='marathi'
console.log(chinmay)
//delete
delete chinmay.firstName
delete chinmay["lastName"]
console.log(chinmay)


let ninad={
    firstName : "ninad",
    lastName : " dani",
    age : 34,
    rollNo :45
}
console.log(ninad['firstName'])
for(let prop in ninad){
    console.log(prop,ninad[prop])
}

let ninad2={
    firstName : "ninad",
    lastName : " dani",
    age : 34,
    rollNo :45
}
for (let x in ninad2){
    console.log(x,ninad2[x])
}