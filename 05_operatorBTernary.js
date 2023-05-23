console.log(`Find Greatest Number is:`);
 var  greaterNumber = function (num1,num2){
 var num1 = 10;
 var num2 = -10;
 var result = num1>=num2 ? "10 Number is Greater" : " -10 Number is Small";
 console.log(`${result}`);

 }
 greaterNumber();

 
 var  greaterNumber = function (num3,num4){
    var num3 = 899;
    var num4 = 800;
    var result = num3>=num4 ? "899 Number is Greater" : " 800 Number is Small";
    console.log(`${result}`);
   
    }
    greaterNumber();
    console.log(`-------------------------------------------------------`);


    console.log(`Check the Even or Odd`);
    var oddEven = function(){
        var num = 29;
        var result = num%2 ? "29 Number is Odd" : "29 Number is Even";
        console.log(`${result}`);

    }
    oddEven();
  
    var oddEven = function(){
        var num = 44;
        var result = num%2 ? "44 Number is Odd" : "44  Number is Even";
        console.log(`${result}`);

    }
    oddEven();
    var oddEven = function(){
        var num = 0;
        var result = num%2 ? "0 Number is Odd" : "0 Number is Even";
        console.log(`${result}`);

    }
    oddEven();

    var oddEven = function(){
        var num = 101;
        var result = num%2 ? "101 Number is Odd" : "101 Number is Even";
        console.log(`${result}`);

    }
    oddEven();
    console.log(`--------------------------------------------------`);
 

  console.log(`Check word has even or odd length is:`);
    function oddEvenValues(str) {
        var Data = str; 
        var DataLength = Data.length;
        console.log(`The length is:`,DataLength);
        var result = str%2 ? "JavaScript has Odd" : "JavaScript has Even";
        console.log(`${result}`);
       
    }
    oddEvenValues("Java Srcipt");
    console.log(` `);

    function oddEvenValues1(str1) {
        var Data = str1; 
        var DataLength = Data.length;
        console.log(`The length is:`,DataLength);
        var Result = str1%2==0 ? "Developer has Even":"Developer has Odd";
        console.log(`${Result}`);
       
    }
    oddEvenValues1("Developer");
console.log(`  `);


function oddEvenValues2(str2) {
    var Data = str2;
    var DataLength = Data.length;
    console.log(`The length is:`,DataLength);
    var result = str2%2 ? "Google has Odd" : "Google has Even";
    console.log(`${result}`);
    
}
oddEvenValues2("Google");   
console.log(`  `);