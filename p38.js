// Write a JavaScript program to check the total marks of a student in various examinations. 
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.


function report_card(exam,marks){


    var grade;

    if(marks>=89 && marks<=100){
        grade = "A+"
        return true;
    }

    else if(exam== "final-exam" && marks>=90){

        grade = "A+";
        return true;
    }

    else{
        return false;
    }
}

console.log( report_card("final-exam", 95));

console.log(report_card("Second-term", 97));

console.log(report_card("mid-Term", 50));


console.log(report_card("final-exam", 12));