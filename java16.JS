let first_name = "chinmay"
console.log(first_name)
let last_name = 'deshpande'
console.log(last_name)
let middle_name = `shirish`
console.log(middle_name)


let fn ="chinmay"
let ln ="deshpande"
//my firstname is chinmay and my last name is deshpande
console.log("my firstName is "+fn+" and my lastName is "+ln)

//program 2 string interpolation
console.log(`My firstName is ${fn} and my lastName is ${ln}`)

//program 3
// string + number -----> string
// number + string -----> string
// string + string ------> string
// number + number ------> number

let a =10
let b =15
let c ="hello"

console.log(a+b+c)
//number + number + string
// 25 + "hello"
//25hello

console.log(c+a+b)

console.log(b+c+a)

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

//string-------------> object------------------ properties and methods

let city ="pune"
console.log(city)
let e = city[0]
console.log(e)

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

//program2
let city1 = "chandrapur"
for ( let i=0 ; i<city1.length ; i++){
    console.log(city1[i])

}

for (let i=city1.length-1; i>=0 ;i--){
    console.log(city1[i])
}

//program 3

let city2 = "nagpur"
let i1=0
while(i1 < city2.length){
    console.log(city2[i1])
    i1=i1+1
}


let i3 = city2.length -1
while(i3 >=0){
    console.log(city2[i3])
        i3 =i3-1
}

























































