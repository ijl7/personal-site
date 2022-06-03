var password = "please";
var correct = false;
var x = prompt("Enter the password:");
while(!correct){
    if (x == null){
        alert("Good try.");
        x = prompt("Enter the password:");
        continue;
    }
    if (x.toLowerCase() == password) {
        alert("There you go! Good job.");
        correct = true;
    } 
    if(!correct){
        x = prompt("That is incorrect! Try again.");
    }
}