const str = "How are you mate";   //=> "How are you Mate"
let newChar = "";
const arrayWords = str.split(" ");
for (const element of arrayWords){
    for (let index = 0; index < element.length; index++) {
        let char = ""
        if (index == 0 || index == element.length-1) {
            char = element[index].toUpperCase();
            
        } else {
            char = element[index];
        }
        newChar = newChar + char;
    }
    newChar = newChar + "";
}
console.log(newChar);