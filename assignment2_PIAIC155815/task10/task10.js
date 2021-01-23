var correctpass = "gghh123";

var userpass = prompt("Enter password");

if (userpass == "")
    userpass = prompt("Please enter your password");
else if (userpass == correctpass)
    alert("Correct! The password you entered matches the original password");
else
    alert("Incorrect password");