
function vowelsCounter(string) {
  let count=0;
  const lowerCaseString = string.toLowerCase();

  for (let char of lowerCaseString) {
    if(char=='a' || char=='e' || char=='o' || char=='u' || char=='i'){
      count++;
    }
  }
  return count;
}

while(true){
    let string = prompt("Enter Your String");

    if (string === null) {
        alert("User canceled.");
        break; 
    }

    else{
        var message = vowelsCounter(string);
        alert("Your string contains "+message+" Vowels");
    }
}
