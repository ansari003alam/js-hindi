//****************************FOR EACH ******************************************//

const coding = ["Js" , "Python" , "Ruby" , "java" , "Cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (value , index) => {
//     console.log(value , index);
    
// } )

const myCoding = [

    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (value) => {
    console.log(value.languageFileName);
    
} )