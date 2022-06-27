// 1. Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ['Mushroom', 'Spinach', 'Feta', 'Onion', 'Tomato'];

// 2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {
  let toppings = '';
  for (let element of pizzaToppings) {
    toppings += element + ' '
  };
  return console.log(`Welcome to Alexander's Pizza! Our toppings today are: ${toppings}`);
};

/* 3. Create a getPizzaOrder function that:
-Has the parameters: size, crust, and in indefinite amount of toppings as inputs
-Prints the order, i.e. "One large thick crust pizza with x,y,z...coming up!"
-Outputs a list with the size, crust, and toppings */

function getPizzaOrder(size,crust,...toppings) {
  let pizzaArr =[size,crust,toppings];
  console.log(`One ${pizzaArr[0]} ${pizzaArr[1]} crust pizza with ${pizzaArr[2]} coming up!`);
  return pizzaArr;
  }

/* 4. create a preparePizza function that:
-has an array as its parameter with three items: a size, a crust, and a list of toppings
-prints something like "...cooking pizza..."
-outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings */


function preparePizza(arrParam){
  let pizzaObj = {
    size: arrParam[0],
    crust: arrParam[1],
    toppings: arrParam[2],
  }
  console.log("...cooking pizza...");
  return pizzaObj;
}

/* 5. Create a servePizza function that:
-has a parameter of a pizza Object
-logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x,y,z, ...enjoy!"
-outputs the same pizza Object that was passed in */


function servePizza(objParam) {
  console.log(`Order up! Here's your ${objParam.size} ${objParam.crust} crust pizza with ${objParam.toppings}...enjoy!`);
  return objParam;
}

/* 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input.
No hard-coding necessary in this part. */

  // call greetCustomer
  greetCustomer();

  // call getPizzaOrder with parameter inputs
  getPizzaOrder('large','thick','Mushroom','Spinach','Feta','Onion','Tomato');

  // call preparePizza with callback from getPizzaOrder
  preparePizza(getPizzaOrder('large','thick','Mushroom','Spinach','Feta','Onion','Tomato'));

  // call servePizza with callbacks from preparePizza and getPizzaOrder
  servePizza(preparePizza(getPizzaOrder('large','thick','Mushroom','Spinach','Feta','Onion','Tomato')));


// bonus answers below are work-in-progress and don't function correctly

/*9. Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct.
You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c" */

//const pizzaToppings = ['Mushroom', 'Spinach', 'Feta', 'Onion', 'Tomato'];

function listToppings(toppingsArr) {
toppingsArr.splice(toppingsArr.length-1,0,'and');
return toppingsArr
}
listToppings(pizzaToppings);

/* 10. In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!").
Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza. */

function getPizzaOrder(size,crust,...toppings) {
  let pizzaArr =[size,crust,toppings]
  if (pizzaArr.length = 3){
   return console.log(`One ${pizzaArr[0], pizzaArr[1]} crust pizza with ${pizzaArr[2]} coming up!`), pizzaArr
  }
  else if (pizzaArr.length < 3) {
    return console.log(`One ${pizzaArr[0], pizzaArr[1]} crust pizza with cheese coming up!`), pizzaArr
  };

  }
getPizzaOrder ("small","thin","mushroom","tomato");
