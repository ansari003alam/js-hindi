// //*******************FOR OF ***********************//

// const arr = [1,2,3,4,5]
// //for (const num of arr) {
//     //console.log(num);
    
    
// }

// const greetings = "Hello Ansari!"

// //for (const greet of greetings) {
//    // console.log(`Each char is ${greet}`);
    
    
// }

// //***************************MAPS********************************//

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("FR", "France")
// map.set("IN", "India")

// //console.log(map);

// //for (const [key , value] of map) {
//     //console.log(key , "-:", value);
    
    
// }

// const myObject = {
//     'game1' : 'pubg',
//     'game2' : 'subway',
//     'game3' : 'cricket'

// }
// //console.log(myObject);

// //for (const [key , value] of myObject) {
//    // console.log(key , "-:" , value);
    
// //}


const newObject = {
    js : "JavaScript",
    py : "Python",
    rb : "Ruby",
    cpp : "C++"
}
//console.log(newObject);
for (const key in newObject) {
    //console.log(`${key} is shortcut of ${newObject[key]}`);
    
}


const programming = ["JS", "rb", "py","cpp"]

for (const key in programming) {
    //console.log(programming[key]);
    
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

for (const key in map) {
    console.log();
    
}
