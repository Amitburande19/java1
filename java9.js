let birthyear = [1989,1990,1991,1992]
let ages = []
for(let i =0 ; i<birthyear.length ; i++){
   // console.log(i)
   //console.log(2024 - birthyear[i])
   let x = 2024 - birthyear[i]
   ages.push(x)
}
console.log(ages)

let marks = [11,44,66,88,33,44,55]
let above50 = []
for(let i = 0 ; i < marks.lenth ; i++){
    if(marks[i] > 50){
        above50.push(marks[i])
    }

}

console.log(above50)


let numbes = [11,22,33]
let total = 0
for(let i = 0 ; i < numbes.length ; i++){
    total = total + numbes[i]
}
console.log(total)



let cities =["nagpur","chennai","banglore","kolkata"]
for (let i = 0 ; i<cities.length ; i++){
    console.log("welcome "+cities[i])
}












