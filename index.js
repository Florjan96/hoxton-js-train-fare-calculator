// Description
// This time we're going to build a train fare calculator. Simple enough, right? 
// We're not looking for something too fancy, but you should be able to 
// input your age and the distance you're travelling and get your ticket price.

// Instructions
// - Ask the user for their age and how far they are travelling (in km)
//    -- The price per travelled km will be £0.21
let pricePerKm=0.21
//    -- Junior passengers (under 18) get a 20% discount
let discountUnder18=0.2

//    -- Senior passengers (over 65) get a 40% discount

let discountOver65=0.4
// - Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.


let myName= prompt('What is your name?')


let myAge=Number( prompt('What is your age?'))


let myDistance=Number(prompt("How long is the distance you will take? "))



if (myAge<18){
alert(myName + " " + "you will pay" + " " + (myDistance * pricePerKm) * 0.8 + "$")

}

else if (myAge>18 && myAge<65){
    alert(myName + " " + "you will pay" + (myDistance * pricePerKm) + "$")

}


else {
    alert(myName + " " + "you will pay" + " " + (myDistance * pricePerKm) * 0.6 + "$")



}

