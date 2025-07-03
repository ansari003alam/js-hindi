// const myArr =  [1, 2, 3, 4, 5]

// const newArr = myArr.reduce( (acc , currval) => {
//     console.log(`acc val: ${acc}  currval: ${currval}`);
    
//     return acc + currval
// } , 0)
// console.log(newArr);


const shoppingCart = [
    {
        itemName : 'vegetables',
        price : 520
    },
    {
        itemName : 'fruits',
        price : 850
    },
    {
        itemName : 'grocery',
        price : 1520
    },
    {
        itemName : 'meat',
        price : 320
    },
]

const priceToPay = shoppingCart.reduce( (acc , item) => (acc + item.price) , 0)
console.log(priceToPay);

