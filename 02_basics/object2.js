const tempUser = {}

tempUser.name = "Saif"
tempUser.id = "123abc"
tempUser.isLoggedin = false

//console.log(tempUser)


const regularUser = {
    email:"saifi@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Saif",
            lastname: "Ansari"
        }
    }
}
//console.log(regularUser);


const Obj1 = {1: "a", 2: "b"}

const Obj2 = {3: "a", 4: "b"}

const Obj3 = {...Obj1, ...Obj2};

// console.log(Obj3);

// console.log(tempUser);

// console.log(Object.keys(tempUser));


// console.log(Object.entries(tempUser));


const users=[

    {
        id : 2,
        email : "saif@gmail.com"
    },
    {
        id : 2,
        email : "saif@gmail.com"
    },
    {
        id : 2,
        email : "saif@gmail.com"
    },
    {
        id : 2,
        email : "saif@gmail.com"
    }
]

users[1].email

console.log(tempUser);

console.log(Object.keys(tempUser));

console.log(Object.values(tempUser));



