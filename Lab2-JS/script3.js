
function newClock(clock) {
    
    if(clock==0)
    return (12 + "AM") ;

    else if(clock==12)
    return (12 + "PM") ;

    else if(clock >= 1 && clock <= 11)
    return (clock + "AM") ;

    else
    return (clock-12 + "PM");
  }
  
  while(true){
      let clock = prompt("Enter Your 24 hour clock");
  
      if (clock === null) {
          alert("User canceled.");
          break; 
      }

      else if(Number.isNaN(clock) || clock == ""){
        alert("It couldn't be string or null.");
      }

      else if (clock < 0 || clock >= 24){
        alert("Invalid Value.");
      }
  
      else{
          var message = newClock(clock);
          alert("Your clock in 12 hour is "+message);
      }
  }
  