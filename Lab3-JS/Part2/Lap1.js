
while (true) {
    let number = prompt("How many values you want to enter ?");
    let flag = 0;
    let sum = 0;

    if (number === null) {
        alert("User canceled.");
        break;
    }

    else if (isNaN(number) || number == "") {
        alert("It couldn't be string or null.");
    }

    else {
        let myArray = new Array(number);
        for (let i = 0; i < number; i++) {
            let value = prompt("Enter number " + (i + 1));
            myArray[i] = Number(value);
            if (Number.isNaN(myArray[i])) {
                alert("That is not a number");
                flag = 1;
                break;
            }
        }

        if (flag == 0) {
            for (let i = 0; i < number; i++) {
                sum = sum + myArray[i];
            }
            let avg = sum / number;
            alert("The sum is " + sum + " The average is " + avg);
        }

    }
}
