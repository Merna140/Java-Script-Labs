
function myCalc(first, op, second) {
    op = op.toLowerCase();
    first = Number(first);
    second = Number(second);
    let result = 0;

    if (op == "sum" || op == "+")
        result = first + second;

    else if (op == "multi" || op == "*")
        result = first * second;

    else if (op == "subtract" || op == "-")
        result = first - second;

    else if (op == "division" || op == "/")
        result = first / second;

    else if (op == "moduls" || op == "%")
        result = first % second;

    else
        result = "Operation not in the list."

    return result;
}

while (true) {
    let firstNum = prompt("Enter 1st Number");
    let op = prompt("Choose operation: sum,multi,subtract,division,moduls");
    let secondNum = prompt("Enter 2nd Number");

    do {
        if (firstNum === null || op === null || secondNum === null) {
            alert("User canceled.");
            break2;
        }

        else if (firstNum == "" || op == "" || secondNum == "") {
            alert("One of the inputs is null.");
            break;
        }

        else if (isNaN(firstNum) || isNaN(secondNum)) {
            alert("One of the inputs is not a number.");
            break;
        }

        else {
            let result = myCalc(firstNum, op, secondNum);
            let sign;
            if (result == "Operation not in the list.")
                alert("Operation not in the list.");
            else {
                if (op == "sum" || op == "+")
                    sign = "+";
                else if (op == "multi" || op == "*")
                    sign = "*";
                else if (op == "subtract" || op == "-")
                    sign = "-";
                else if (op == "division" || op == "/")
                    sign = "/";
                else if (op == "moduls" || op == "%")
                    sign = "%";

                alert(firstNum + sign + secondNum + " = " + result);

                var confirmation = confirm('Do you want to use the result as 1st number?');

                if (confirmation) {
                    firstNum = result;
                    op = prompt("Choose operation: sum,multi,subtract,division,moduls");
                    secondNum = prompt("Enter 2nd Number");
                } else {
                    break;
                }
            }

        }
    } while (true);
}