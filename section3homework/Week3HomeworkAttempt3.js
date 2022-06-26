// 1. Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = [' Mushroom', ' Spinach', ' Feta', ' Onion', ' Tomato'];

// 2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {
  let result = ''
  for (let name of pizzaToppings) {
  result = name+result;
  }
  console.log(`Welcome to Alexander's Pizza Place. Our toppings today are: ${result}.`);
  }
  greetCustomer();

/* 3. Create a getPizzaOrder function that:
-Has the parameters: size, crust, and in indefinite amount of toppings as inputs
-Prints the order, i.e. "One large thick crust pizza with x,y,z...coming up!"
-Outputs a list with the size, crust, and toppings */

function getPizzaOrder(size,crust,...toppings) {

let pizzaArr =[size,crust,toppings];
console.log("One "+pizzaArr[0]+" "+pizzaArr[1]+ " crust pizza with "+pizzaArr[2]+" coming up!");
return pizzaArr;
}
getPizzaOrder('large','thin','Mushroom','Spinach','Feta','Onion','Tomato');


/* 4. create a preparePizza function that:
-has an array as its parameter with three items: a size, a crust, and a list of toppings
-prints something like "...cooking pizza..."
-outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings */

function preparePizza(arrParam){
  let pizzaObj = {
    size: arrParam[0],
    crust: arrParam[1],
    toppings: arrParam[2],
  };
  console.log("...cooking pizza...");
  return pizzaObj;
}
preparePizza(getPizzaOrder('large','thin','Mushroom','Spinach','Feta','Onion','Tomato'));


/* 5. Create a servePizza function that:
-has a parameter of a pizza Object
-logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x,y,z, ...enjoy!"
-outputs the same pizza Object that was passed in */

function servePizza(objParam) {
  let pizzaObj = objParam;
  console.log("Order up! Here's your "+objParam.size+" "+objParam.crust+" crust pizza with "+objParam.toppings+"...enjoy!");
  return pizzaObj;
}
servePizza(preparePizza(getPizzaOrder('large','thin','Mushroom','Spinach','Feta','Onion','Tomato')));

/* 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input.
No hard-coding necessary in this part. */


servePizza(preparePizza(getPizzaOrder('large','thin','Mushroom','Spinach','Feta','Onion','Tomato')));
