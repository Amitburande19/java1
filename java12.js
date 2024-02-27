//slice()
let names = ["chinmay","shirish","ram","sham","sanjay","satish"]
console.log(names.slice(3))
console.log(names.slice(-5))
console.log(names.slice(1,5))
console.log(names.slice(1,-1))
console.log(names.slice(-1,-5))

//splice

let cities =["pune","mumbai","banglore","kolkata","chennai"]
console.log(cities.splice(1,2))
console.log(cities)
cities.splice(2,1)
cities.splice(1,2,"nagpur","wardha","goa")

//fill

let numA=[11,22,33,44,55,66,77]
let q = numA.fill('@',1,5)
console.log(q)

//flat

let states =[["nagpur","wardha"],["bhopal","indore"],["jaipur","udaipur"]]

console.log(states[0][1])
console.log(states[2][1])
console.log(states[2][0])
console.log(states[1][1])

//sort
let fruits =["apple","banana","orange","chikoo"]
fruits.sort()
console.log(fruits)

//at()
let a11 =[111,222,333,444,555,5555]
let b11 =a11.indexOf(111)
console.log(b11)
let b13 = a11.at(3)
console.log(b13)

//join()
let info =["amit","burande",6446464]
let w2 =info.join(' ')
console.log(w2)
console.log(typeof(w2))

//reverse
let T =[11,22,33]
T.reverse()
console.log(T)

//concat
let a =[11,22,33]
let b =[44,55,66]
let c = a.concat(b)
console.log(c)