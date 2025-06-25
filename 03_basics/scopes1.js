let a = 300
if(true){
    let a = 20
    const b = 40
    //var c = 60
    //console.log("Inner :", a);
    
}

//console.log(a);


function one(){
    const username = "Saif"

    function two(){
        const website = "youtube"
       // console.log(website);
        
    }
   // console.log(username);
    
    two()
}
//one()

if(true){
    const username = "Ansari"
    if(username === "Ansari"){
        const website = "Chrome"
        //console.log(username + website);    
    }
    //console.log(website);
    
}



function addOne(num){
    return num + 1
}
console.log(addOne(6))


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(8))
