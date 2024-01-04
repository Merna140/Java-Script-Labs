
function Contact(name, number) {
    return {
        name: name,
        number: number,
    };
}

let myArray = [];

while (true) {
    let choice = prompt("Choose an operation \n 1)Add. \n 2)Search.");

    if (choice === null) {
        alert("User canceled.");
        break;
    }

    else if (isNaN(choice) || choice == "") {
        alert("It couldn't be string or null.");
    }

    else if (choice !== "1" && choice !== "2") {
        alert("Choice not in the menu.");
    }

    else {
        if (choice == "1") {
            let name = prompt("Enter Contact Name.");
            while (!isNaN(name) || name === null || name === "") {
                alert("Invalid Input");
                name = prompt("Enter Contact Name.");
            }

            let number = prompt("Enter Contact Number.");
            while (isNaN(number) || number === null || number === "") {
                alert("Invalid Input");
                number = prompt("Enter Contact Number.");
            }

            let item = Contact(name, number);
            console.log("My Item is: ", item);
            myArray.push(item);
            alert("Contact Added Successfully.");
        }
        else {
            let searchInput = prompt("Enter the name your are looking for");
            while (!isNaN(searchInput) || searchInput === null || searchInput === "") {
                alert("Invalid Input");
                searchInput = prompt("Enter the name your are looking for");
            }
            let searchItem = myArray.find(item => item.name === searchInput);
            if (searchItem) {
                alert("Your Contact Name is: " + searchItem.name + "\nYour Contact Number is: " + searchItem.number);
            }
            else {
                alert("Not Found.");
            }
        }
    }
}
