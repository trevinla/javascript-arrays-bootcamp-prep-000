var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  var myArray = a;
<<<<<<< HEAD
=======
  var myElement = b;
//  return myArray.unshift(myElement)
>>>>>>> 1758e1a85e145e70e9caa681e6d3d4ee1fa95e5b
  return [b, ...myArray];
}

function destructivelyAddElementToBeginningOfArray(a, b) {
<<<<<<< HEAD
  a.unshift(b);
  return a;
=======
  // var myArray = a;
  // var myElement = b
  a = [b, ...a];
  return a  //.unshift(myElement);
>>>>>>> 1758e1a85e145e70e9caa681e6d3d4ee1fa95e5b
}

function addElementToEndOfArray(a, b) {
  var myArray = a;
<<<<<<< HEAD
=======
  var myElement = b;
>>>>>>> 1758e1a85e145e70e9caa681e6d3d4ee1fa95e5b
  return [...myArray, b];
}

function destructivelyAddElementToEndOfArray(a, b) {
<<<<<<< HEAD
  a.push(b);
  return a;
}

function accessElementInArray(a, b) {
  return a[b];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a) {
return a.slice(1);
return a;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length -1);
  return a;
=======
  //a = [...a, b];
  return [...a, b];
>>>>>>> 1758e1a85e145e70e9caa681e6d3d4ee1fa95e5b
}
