

while (true) {
    let userFlag=0;
    let passFlag=0;
    let username = prompt("Enter your Username");
    let password = prompt("Enter your Password");

    if (username === null || password === null) {
        alert("User canceled.");
        break;
    }

    if (username == "admin") {
        userFlag = 1;
    }

    if (password == "421$$") {
        passFlag = 1;
    }

    if (userFlag == 1 && passFlag == 1) {
        alert("Welcome login success.");
        break;
    }
    else {
        if (userFlag == 0)
            alert("Invalid Username.");

        if (passFlag == 0)
            alert("Invalid Password.");
    }
}