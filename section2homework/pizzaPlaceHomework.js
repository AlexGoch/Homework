// Inside your JS File, create two variables: pizzaPlace and numberOfToppings.
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
const pizzaPlace = "Alexander's Pizza Place";
let numberOfToppings = 12;
// Print the variables and their types.
console.log(pizzaPlace,typeof pizzaPlace);
console.log(numberOfToppings,typeof numberOfToppings);
// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(`Here at ${pizzaPlace} we offer ${numberOfToppings} toppings to choose from.`);
/* Construct an if statement that prints "Quality, not quantity."
if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings. */
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza.");
}
//Use a loop to print all of the even numbers from 1 to numberOfToppings
for (i=1;i<=numberOfToppings;i++){
  if (i%2==0){
    console.log(i);
  }
}
//Bonus loop that prints odd numbers!
for (i=1;i<=numberOfToppings;i++){
  if (i%2!=0){
    console.log(i);
  }
}
