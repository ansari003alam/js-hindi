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

const Obj3 = {...obj1, ...obj2};

console.log(Obj3);
