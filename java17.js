// string ----object

let first_name= "chinmay"
console.log(first_name)
console.log(typeof first_name)

let q1 = first_name.length
console.log(q1)

//method
//action
//return type

let last_name= "deshpande"

//program1
let s1  = last_name.toUpperCase()
console.log(s1)

let middle_name = 'shirish'
let s2 = middle_name.toUpperCase()
console.log(s2)

//program2

let s3 = "hello".toUpperCase().toLowerCase().length
console.log(s3)

// program 3
let fruit ="apple"
let s4 = fruit.startsWith("app")
let s5 = fruit.startsWith("a")
let s6 = fruit.startsWith("A")
let s7 = fruit.endsWith("e")
let s8 = fruit.endsWith("le")
let s9 = fruit.endsWith("lle")

console.log(s4)
console.log(s5)
console.log(s6)
console.log(s7)
console.log(s8)
console.log(s9)

// program 4
let vegetable = "brinjal"
let s10 = vegetable.includes('i')
let s11 = vegetable.includes('iu')
let s12 = vegetable.includes('inj')
console.log(s10)
console.log(s11)
console.log(s12)

let s13 = vegetable.indexOf('b')
let s14 = vegetable.indexOf('e')
console.log(s13)
console.log(s14)

// program 5
let a11 = ' hello'
console.log(a11)

console.log(a11.length)
s15 = a11.trimStart()
console.log(s15.length)

a11 =' hello '
console.log(a11.length)
s16 = a11.trimEnd()
console.log(s16.length)


a11 = ' hello '
s17 = a11.trim()
console.log(s17.length)


info = ' i am learning javascript'
s18 = info.replace("javascript","python")
console.log(s18)























