function getUserStatus(age) {
    if (age >= 1 && age <= 10) {
      return "Child";
    } else if (age >= 11 && age <= 18) {
      return "Teenager";
    } else if (age >= 19 && age <= 50) {
      return "Grown up";
    } else {
      return "Old";
    }
  }

while(true){
    let age = prompt("Please Enter Your Age");

    if (age === null) {
        alert("User canceled.");
        break; 
    }

    else if(age == ""){
        alert("The field is empty.");
    }

    else{
        var message = getUserStatus(age);
        alert("Your status is "+message);
    }
}
