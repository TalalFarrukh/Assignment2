var marks1 = prompt("Enter marks",0);
var marks2 = prompt("Enter marks", 0);
var marks3 = prompt("Enter marks", 0);
var TotalMarks = 300;

var sum = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
var percentage = parseInt((sum / TotalMarks) * 100);
var grade; var Remarks;

if (percentage >= 80) {
    grade = "A*"; Remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A"; Remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B"; Remarks = "You need to improve";
}
else {
    grade = "Fail"; Remarks = "Sorry";
}


alert("Marks Sheet \nTotal marks: " + TotalMarks + "\nMarks obtained: " + sum + "\nPercentage: " + percentage + "%" + "\nGrade: " + grade + "\nRemarks: " + Remarks);