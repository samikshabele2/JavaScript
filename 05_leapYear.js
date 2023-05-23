// program to check leap year
var checkLeapYear = function(leapYear){

    //three conditions to find out the leap year
     var leapYear = 0;
    if ((0 == leapYear % 4) && (0 != leapYear % 100) || (0 == leapYear % 400)) {
       console.log(`This is leap Year: ${leapYear}`);
    } else 
    {
        console.log(`This is Not Leap Year:${leapYear}`);
    }
}
checkLeapYear(leapYear);

// take input
// const year = prompt('Enter a year:');