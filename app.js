var cheMarks = document.querySelector("#chemarks")
var phymMarks = document.querySelector("#phymarks")
var mathsMarks = document.querySelector("#mathsmarks")
var engMarks = document.querySelector("#engmarks")
var urdMmarks = document.querySelector("#urdumarks")
var islMarks = document.querySelector("#islmarks")
var studentTotal = document.querySelector("#totalmarks")
var percentage = document.querySelector("#percentage")
var grade = document.querySelector("#grade")

function resultCalculator() {
    console.log(cheMarks.value);
    console.log(phymMarks.value);
    console.log(mathsMarks.value);
    console.log(engMarks.value);
    console.log(urdMmarks.value);
    console.log(islMarks.value);
    
    var totalMarks = 550 ;
    var obatainedMarks = +cheMarks.value + +phymMarks.value + +mathsMarks.value + +engMarks.value + +urdMmarks.value + +islMarks.value;

    console.log("Obatained Marks ====>" , obatainedMarks);
    totalmarks.innerHTML = obatainedMarks ;

    var studentPercentage = obatainedMarks * 100 / totalMarks ;
    percentage.innerHTML = studentPercentage ;

    if(studentPercentage > 80){
        grade.innerHTML = 'A+'
    }else if(studentPercentage > 70){
        grade.innerHTML = 'A'
    } else if(studentPercentage > 60){
        grade.innerHTML = 'B'
    } else if(studentPercentage > 50){
        grade.innerHTML = 'C'}
    else if(studentPercentage > 40){
        grade.innerHTML = 'D'}
    else{
        grade.innerHTML = 'FAIL'
    }

  

}







