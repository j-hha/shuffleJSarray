// These are attempts to learn how to create functions that shuffle arrays
// containing strings in JavaScript

// Version One ----------------------------------------------------------------

// array to be shuffled
var myArray = ['one','two','three','four'];

// shuffle function
var shuffleArray = function() {
  // loops over the array
  for (var i = 0, length = myArray.length; i < length; i++) {
    // creates a random whole number
    var x = Math.round(Math.random() * length);
    // if random number is identical to the current index,
    // the item at this index is saved in the variable itemToShuffle, removed
    // and then added back in at the end of the array
    if (x === i) {
      var itemToShuffle = myArray[i];
      myArray.splice(x, 1);
      myArray.push(itemToShuffle);
    }
  }
};
shuffleArray();
console.log(myArray);

// Version Two ----------------------------------------------------------------

// array to be shuffled
var mySecondArray = ['five','six','seven','eight'],
// empty array to push items from ordered array into in random order
    shuffledArray = [];

// shuffle function
var otherShuffleFunction = function() {
  // loops over array for the length of the array to be shuffled
  for (var j = mySecondArray.length; j > 0; j--) {
    // creates a random whole number between 0 and the numeric value of the current
    // last index of the array (changes since items are constantly being sliced out)
    var y = Math.round(Math.random() * (mySecondArray.length-1));
    // pushes item at the index of randomly created number into empty array
    shuffledArray.push(mySecondArray[y]);
    // removes item at the index of randomly created number from old array
    mySecondArray.splice(y, 1);
  }
};

otherShuffleFunction();
console.log(shuffledArray);
