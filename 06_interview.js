var tcsInterview  = function (gradScore, hscScore , sscScore, candidateName){

    if(gradScore>=70 || hscScore>=80 || sscScore>=90){
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    } else {
        console.log(`Unfortunately ${candidateName} you are Not eligible for interview`);
        
    }
}
    tcsInterview(80,86,90, "Yogeshwari");
    console.log(`  `);
    tcsInterview(70,65,55,"Komal");
    console.log(`  `);
    tcsInterview(60,79,88,"Spana");