console.log("TCS Interview Criteria : ");
var interviewTcs = function(gradScore, hscScore, sscScore, candidateName){
var result = gradScore>=70  || hscScore>=80  || sscScore>90 ? `Congrats ${candidateName} You are Eligiable for TCS Interview` : `Unfortunatly ${candidateName} you are not Eligiable for TCS Interviev `;
console.log(`${result}`);
}
interviewTcs(80, 86, 90, "Samiksha");
interviewTcs(70, 65, 55, "Meena");
interviewTcs(60, 79, 88, "Sanjay");