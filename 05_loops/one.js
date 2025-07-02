// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best number");
        
//     }
//     console.log(element);
    
// } 


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i*j );   
//     }   
// }

// let myArray = ["Masoom", "Saif", "Kaif", "Wasim"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// for (let index = 0; index <= 20; index++) {
    
//     if(index==5){
//         console.log("5 detected");
        
//         break;
//     }
//     console.log(`Value of index is ${index}`);
    
// }
for (let index = 0; index <= 20; index++) {
    
    if(index==5){
        console.log("5 detected");
        
        continue
    }
    console.log(`Value of index is ${index}`);
    
}