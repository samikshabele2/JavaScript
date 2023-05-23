console.log(`Implicit Converation to Straing..........`);
// numeric string used with + given string type
let result;
result = '3' + 2;
console.log(` This String is:${ result}`);

result = '3' + true;
console.log(` This String is:${ result}`);

result = '3' + undefined;
console.log(` This String is:${ result}`);

result = '3' + null;
console.log(` This String is:${ result}`);
console.log(`--------------------------------------------------------`);

console.log(`Implicit boolean Converation Number is:`);
// If Boolean is used ,true is 1,false is 0.....

result = '4' - true;
console.log(` This String is:${ result}`);

result = '4' + true;
console.log(` This String is:${ result}`);

result = '4' + false;
console.log(` This String is:${ result}`);
console.log(`------------------------------------------------`);

console.log(`Implicit string Converation to Number..........`);
// numeric string used with-,/,* result number type
result = '4' -  '2';
console.log(` This String is:${ result}`);

result = '4' -  2;
console.log(` This String is:${ result}`);

result = '4' * '2';
console.log(` This String is:${ result}`);

result = '4' /  2;
console.log(` This String is:${ result}`);
console.log(`----------------------------------------`);

console.log(`Undefined used with number,boolean or null given NaN.........`);
// Artimatic opertaion of undifined with number,boolean or null given NaN
result = 4 + undefined;
console.log(` This String is:${ result}`);

result = 4 -  undefined;
console.log(` This String is:${ result}`);

result = true + undefined ;
console.log(` This String is:${ result}`);

result = null + undefined;
console.log(` This String is:${ result}`);
console.log(`-------------------------------------`);

console.log(`Explicit converation:Convert number string and bollean values to  numbers, in that case we case we can use Number`);
// String to Number
result = Number('324');
console.log(` This String is:${ result}`);

result = Number('324e -1');
console.log(` This String is:${ result}`);

// boolean to Number

result = Number(true);
console.log(` This String is:${ result}`);

result = Number(false);
console.log(` This String is:${ result}`);
console.log(`-------------------------------------`);

console.log(`Explicit converation:invalid string to number return NaN.........`);
// If a string is an invalid number,the result will be NaN
result = Number( `hello`);
console.log(` This String is:${ result}`);


result = Number(undefined);
console.log(` This String is:${ result}`);


result = Number(NaN);
console.log(` This String is:${ result}`);
console.log(`-------------------------------------`);

console.log(`Explicit converation:String to Number using + operator.........`);
var numberInString = "100";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof numberInString);

console.log(`Explicit converation number to string data type converationusing toString() method.........`);
var myNumber = 100;
console.log(typeof myNumber);
var afterConveration = myNumber.toString();
console.log(typeof afterConveration);