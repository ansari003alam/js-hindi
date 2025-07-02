// const coding = ["Js" , "Python" , "Ruby" , "java" , "Cpp"]


// const values = coding.forEach( (key) => {
    //console.log(key);
    
// } )
//console.log(values);


// const realNum = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const newNum = realNum.filter( (num) => num > 4 )
// console.log(newNum);


// const realNum = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const newNum = realNum.filter( (num) => {
//     return num > 4
// } )
// console.log(newNum);



const books = [
    {title : 'Book 1' , genre : 'fiction' , publish : 1982 , edition : 1999},
    {title : 'Book 2' , genre : 'non-fiction' , publish : 1991 , edition : 2001},
    {title : 'Book 3' , genre : 'History' , publish : 1989 , edition : 2004},
    {title : 'Book 4' , genre : 'fiction' , publish : 2007 , edition : 2010},
    {title : 'Book 5' , genre : 'History' , publish : 2005 , edition : 2014},
    {title : 'Book 6' , genre : 'non-fiction' , publish : 1997 , edition : 2003},
    {title : 'Book 7' , genre : 'History' , publish : 1987 , edition : 1994},
    {title : 'Book 8' , genre : 'fiction' , publish : 2003 , edition : 2008},
]

let userBooks = books.filter( (bk) => bk.genre === 'History' )


userBooks = books.filter( (bk) => {return bk.publish >= 2000} ) 
console.log(userBooks);
