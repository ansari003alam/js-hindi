

//*********************THIS***********************************//


const user = {
    username : "Saif",
    price : 299,

    welcomeMessage : function (){
       // console.log(`${this.username} , welcome to website`);
       // console.log(this);
        
        
    }
}
user.welcomeMessage()
user.username = "Kaif"
user.welcomeMessage()



//***********************ARROW FUNCTION*************//

const one = () => {
    let username = "Ansari"
    //console.log(this.username);
    
}
one()

// const addNumber = (num1 , num2) => {
//     return num1+num2 

// }
const addNumber = (num1 , num2) =>  ( num1 + num2 ) 
    
console.log(addNumber(4,7))