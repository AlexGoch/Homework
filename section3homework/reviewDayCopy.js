// Declare and invoke with return
let weather = "rainy";
let greeting;

function weatherGreeting(){
  let outfit;
  if (weather == "hot and sunny"){
    outfit = "light and cool";
  }
  if (weather == "cold"){
    outfit = "warm";
  }
  if (weather == "rainy"){
    outfit = "wet resistant";
  }
  greeting = `the weather today is ${weather}. Consider wearing something ${outfit}`;
  return greeting;
}


console.log("Before Invocation: " + greeting);

weatherGreeting();



// rest parameter

function printParam (...params) {
  for (let taco of params) {
    console.log(taco);
}
return params;
}
printParams("First","Second","Third","Apple");

// Using returned value as paramter

function printOtherFunctionReturn(otherFunction){
  console.log("This is the param: ", otherFunction);

}
