//function returns a number (this is used as an index number to extract gif url from images.js)
var uniqueRandom = function(min, max) {
  let prev; //keep tract of previ
  return function rand() {  //inner helper function
    let num = Math.floor(Math.random() * (max - min + 1) + min); //generate random index;
    return prev = num == prev && min != max ? rand() : num; // return that random index if it is unique enough
  }
};

var uniqueRandomArray = function(arr) {
  //calls for uniqueRandom helper func to generate a random index number from 0 and selected array
  let randIndex = uniqueRandom(0, arr.length - 1);
  return function () {
    //calls for another func to access rand func within uniqueRandom
    return arr[randIndex()];
  };
};

//generate random image url
const randomImage = uniqueRandomArray(imageUrl);
console.log('func', randomImage());
