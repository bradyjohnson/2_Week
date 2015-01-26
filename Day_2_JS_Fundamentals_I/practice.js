//Once you complete a problem, open up Chrome and check the answer in the console.
var name = 'Tyler';


//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
  //Code Here
var isTyler = function(name){
  if(name === 'Tyler'){
    return true
  }else{
    return false
  }
};
//Next problem


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
  //Code Here
var getName = prompt("Please enter your name");
  if (getName !== null){
    console.log(getName)
}
//Next Problem


//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
  //Code Here
var welcome = function(getName){
  alert("Welcome, " + getName);
};
//Next problem


//What is the difference between arguments and parameters?
  //Answer Here
//A parameter is the variable which is part of the method’s signature (method declaration). An argument is an expression used when calling the method.
var test = function(x, y) {
  y = y || 10;
};
test(4);
//Next problem


//What are all the falsy values in JavaScript and how do you check if something is falsy?
  //Answer Here

//false
//0 (zero)
//"" (empty string)
//null
//undefined
//NaN (a special Number value meaning Not-a-Number!)
//all others are always true, including "0"
var l = (false == 0); // true
var m = (false === 0); // false

//Next Problem


//Create a function called myName that returns your name
  //Code Here
myName = function(getName){
  return(getName);
};


//Now save the function definition of myName into a new variable called newMyName
  //Code Here
var newMyName=myName;

//Now alert the result of invoking newMyName
newMyName = function(){
  alert("Welcome, " + name);
};

//Next problem


//Create a function called outerFn which returns an anonymous function which returns your name.
  //Code Here
outerFn = function(getName){
  console.log(getName);
};


//Now save the result of invoking outerFn into a variable called innerFn.
  //Code Here
var innerFn = outerFn;

//Now invoke innerFn.
console.log(innerFn);
