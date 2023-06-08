const array = [23, 56, 78, 9, 5, 4, 0, 33, 21];
//WAP to get the element greater than 50

const arrayGreaterThan50 = array.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);
// Traditional way
// const newArray = [];
// for (const element of array) {
//     if (element>50) {
//         newArray.push(element); 
//     }
// }
// console.log(newArray);
const arrayEven = array.filter( (element)=> {
    return element%2==0;
} );
console.log(arrayEven);