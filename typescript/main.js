var userName = "Carlos";
var userAge = 30;
function welcomeUser(userName, age) {
    if (age === undefined) {
        console.log("Age is required.");
    }
    else {
        console.log("Welcome ".concat(userName, ", you are ").concat(age, " years old."));
        return true;
    }
    console.log('teste');
}
welcomeUser('Carlos', 30);
