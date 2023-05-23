console.log(`Count the total number vowels...`);
var word = "I am very good IT Developer";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }  
}
console.log(`Count total vowels: ${count}`);

// 1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 + 5*5*5
 var sumOfCube = function (){
    var sum = 0;
    for (let index = 1; index <=5; index++){
      sum = sum + index * index * index; 
    }
    console.log(`Sum of cube of number is: ${sum}`);
 }
 sumOfCube(5);
 console.log(` `);

console.log(`Check the odd Position Charter...`);
 function oddPostionedChars(givenString){
  var str = "";
for (let index = 0; index < givenString.length; index++) {
var char = givenString.charAt(index);
 if(index%2!=0 && char!=" "){
  str = str + char;

 }
  
}
console.log(`${str}`);
 } 
 oddPostionedChars("Hard work always pays back.");
 oddPostionedChars("Soon I Will be Angular IT Champ");