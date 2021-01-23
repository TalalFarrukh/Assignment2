var firstnum = prompt("Enter first number");
var secondnum = prompt("Enter second number");
var operation = prompt("Enter mathematical operation (+,-,*,/,%");
var result;

firstnum = parseInt(firstnum); secondnum = parseInt(secondnum);

if (operation == "+") {
    result = firstnum + secondnum; alert(result);
}
else if (operation == "-") {
    result = firstnum - secondnum; alert(result);
}
else if (operation == "*") {
    result = firstnum * secondnum; alert(result);
}
else if (operation == "/") {
    result = firstnum / secondnum; alert(result);
}
else if (operation == "%") {
    result = firstnum % secondnum; alert(result);
}