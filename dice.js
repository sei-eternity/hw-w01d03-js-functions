const dice = function() {
    let random = Math.floor(Math.random() * 7)
    let random2 = Math.floor(Math.random() * 7)
    
return `Dice rolled are ${random} and ${random2}. Sum is ${random +random2}`

}