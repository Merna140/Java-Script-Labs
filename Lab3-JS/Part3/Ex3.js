
//Write a nested function and explain the closure -> lexical environment.

function counter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(`Count: ${count}`);
    }
  
    function decrement() {
      count--;
      console.log(`Count: ${count}`);
    }
  
    return { increment, decrement };
  }
  
  const counterFunctions = counter();
  
  counterFunctions.increment(); // Output: Count: 1
  counterFunctions.increment(); // Output: Count: 2
  counterFunctions.decrement(); // Output: Count: 1

  /*
  This example showcases how closures help in maintaining and accessing 
  the state of variables even after their enclosing function has finished executing. 
  The inner functions increment and decrement retain access to the count variable from their 
  lexical environment, creating a private scope for the count variable within the counter function.
  */