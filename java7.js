// define a array
let names = ["minal","poorva","shradha","sachin","ram"]
console.log(names[0])
console.log(names[1])

//array stores by index?
console.log(names[2])

// how to know length of array
let q1 = names.length
console.log(q1)

for(let i =0 ; i < 5 ; i++){
    console.log(i)
}

let animal = ["tiger","lion","cat","dog"]
console.log(animal[0])
console.log(animal.length)
for(let i =0 ; i < animal.length ; i++){
    console.log(i)
    console.log(animal[i])
}


let fruits = ["mango","apple","banan","chikoo"]
console.log(fruits[0])
for(let i =0 ; i < fruits.length; i++){
    console.log(i)
   // console.log(fruits[i])
}


//in reverse 

for(let i = fruits.length-1 ; i >=0 ; i--){
    console.log(i)
    console.log(fruits[i])
}

let animals = ["tiger","lion","cat","monkey","rabbit"]
for(let i = 0 ; i < animals.length ; i++){


if(animals[i] == "monkey"){
    break
}
console.log(animals[i])
}


let flowers = ["rose","lily","jasmine","sunflower"]
for(let i = 0 ; i < flowers.length ; i++){
    if(flowers[i] == "jasmine"){
        continue
    }
    console.log(flowers[i])
}

let country = ["india","srilanka","bangladesh","nepal"]
console.log(country)
let y = 0
while(y < country.length){
    console.log(country[y])
    y = y+1
}

































