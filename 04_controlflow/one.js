// const temperature = 45
// if(temperature == 50){
//     console.log("temperature is less than 50");
    
// }
// else{
//     console.log("temperature is greater than 50");

// }


// const salary = 1000;

// if(salary < 500){
//     console.log("less than 500");
// }

// else if(salary < 750) {
//     console.log("less than 750");
// }

// else if(salary < 900){
//     console.log("less than 900");

// }

// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const userLoggedFromGoogle = false
const userLoggedFromEmail = false

if(userLoggedIn && debitCard){
    console.log("Allow to buy grocery");   
}


if(userLoggedFromGoogle || userLoggedFromEmail){
    console.log("Logged In");
    
}