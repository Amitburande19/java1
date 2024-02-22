let birthyear = [1989,1990,1991,1992]
let ages = []
for(let i=0 ; i<birthyear.length; i++){
    let x = 2024 -birthyear[i]
    ages.push(x)
}
console.log(ages)

//map
let e2 = birthyear.map(function(el,index,arr){
    return 2024 - el
})
console.log(e2)

let numbers =[11,22,33,44,55,66,77,88,99]
let e3 = numbers.map(function(el,index,arr){
    return el +1
})
console.log(e3)


let marks = [33,44,55,66,33,77,88]
let above50 =[]
for(let i=0 ; i<marks.length ; i++){
    if(marks[i]>50){
        above50.push(marks[i])
    }

}
console.log(above50)


//filter
let e5 = marks.filter(function(el,index,arr){
    return el>50
})
console.log(e5)




let transictions = [11,22,33,-44,55,-66,-77]
let deposit = transictions.filter(function(el,index,arr){
    return el>0
})
console.log(deposit)
let withdrawl = transictions.filter(function(el,index,arr){
    return el<0
})
console.log(withdrawl)

let numbersA = [11,22,33]
let total = 0
for (let i=0; i<numbersA.length ; i++){
    total=total + numbersA[i]
}
console.log(total)

let e7 = numbersA.reduce(function(acc,el,index,aee){
    return acc +el
},0)
console.log(e7)

