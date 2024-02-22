//map()
let birthyear= [1989,1990,1991,1992]
let q1 = birthyear.map(function(el,index,arr){
    return  2024 -el
})
console.log(q1)

//filter()
let marks =[55,66,77,88,99]
let q2 = marks.filter(function(el,index,arr){
    return el>70
})
console.log(q2)

//reduce()
let numbersA =[11,22,33]
let q3 = numbersA.reduce(function(acc,el,indes,arr){
    return el+acc
},0)
console.log(q3)

//for each()
let cities = ["mumbai","pune","nagpur","kolkata"]
let q4 = cities.forEach(function(el,index,arr){
    console.log("welcome "+el)
})
console.log(q4)

//find
 let numbersB=[22,33,44,55,66,77]
 let q5 = numbersB.find(function(el,index,arr){
    return el>40
 })
 console.log(q5)

 //findindex
 let q7 = numbersB.findIndex(function(el,index,arr){
    return el>40
 })
 console.log(q7)

 //filter
 let q8 = numbersB.filter(function(el,index,acc){
    return el>40
 })
 console.log(q8)

 //every()
 let numbersv=[11,22,3,34,55,44,55,33,2,3,44,90]
 let q9 = numbersv.every(function(el,index,arr){
    return el>1
 })
 console.log(q9)

 //some
 let q10 = numbersv.some(function(el,index,arr){
    return el>10
 })
 console.log(q10)

 //slice
 let nums =[111,222,333,444,555,666,777,888,999,1000]
 console.log(nums.slice(3))
 console.log(nums.slice(3,6))
 console.log(nums.slice(-10,6))