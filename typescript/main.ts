let userName: string = "Carlos";
let userAge: number = 30;

function welcomeUser(userName: string, age?: number): boolean | undefined {
    if (age === undefined) {
        console.log("Age is required.");
        
    } else {
            console.log(`Welcome ${userName}, you are ${age} years old.`);
        return true;
    }

    console.log('teste');
}

welcomeUser('Carlos', 30);  

