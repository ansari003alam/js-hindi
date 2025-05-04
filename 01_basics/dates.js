let curdate = new Date();
// console.log(curdate.toString());
// console.log(curdate.toLocaleString());
// console.log(curdate.toDateString());
// console.log(curdate.toLocaleDateString());
// console.log(curdate.toJSON());
// console.log(curdate.toISOString());
// console.log(typeof curdate);

let myCreatedDate = new Date(2003, 7, 31, 8, 30)

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let myDate = new Date()

console.log(myDate.toLocaleString('default',{
    weekday:"long"
})
);


 